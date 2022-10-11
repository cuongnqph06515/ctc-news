import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, delay, finalize, first, of } from 'rxjs';
import { User } from 'src/app/model/user.model';

import { OauthService } from 'src/app/service/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  spinner: boolean = false;
  responseStatus: number;
  constructor(private formBuilder: FormBuilder, 
    private oauthService: OauthService, 
    private router: Router,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  login(username: string, password: string) {
    this.spinner = true;
    this.oauthService.login(username, password).pipe(
      first(),
      catchError((err)=> of(err)),
      finalize(()=> this.spinner = false ))
        .subscribe({
            next: (reponse) => {
              if(reponse instanceof User){
                this.router.navigateByUrl("/dashboard");
              }else{
                this.responseStatus = reponse.status;
              }
            },
            // error(err) {
            //   this.responseStatus = err.status;
            //   console.log(this.responseStatus);
            // },
          }
        )
  }

  onSubmit(){
    if (this.loginForm.invalid) {
      return;
    }
    this.login(this.loginForm.value.username, this.loginForm.value.password);
  }
}
