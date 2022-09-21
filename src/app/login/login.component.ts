import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OauthService } from '../service/oauth.service';
import { first} from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private oauthService: OauthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  login(username: string, password: string) {
    this.oauthService.login(username, password).pipe(first())
        .subscribe(
            data => {
                this.router.navigate(['/user']);
            },
            error => {
                this.router.navigate(['/login']);
            }
        );
  }

  onSubmit(){
    if (this.loginForm.invalid) {
      return;
    }
    this.login(this.loginForm.value.username, this.loginForm.value.password);
  }
}
