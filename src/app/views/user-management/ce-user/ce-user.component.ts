import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { RoleService } from 'src/app/service/role.service';
import { NoWhiteSpaceFn } from 'src/app/validators/NoWhiteSpaceFn.validator';
import { Role } from 'src/app/model/role.model';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user.model';
import { config } from 'src/app/config/application.config';
import { map, Observable, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-ce-user',
  templateUrl: './ce-user.component.html',
  styleUrls: ['./ce-user.component.css']
})
export class CeUserComponent implements OnInit {
  userForm: FormGroup;
  userName: any;
  userId: number;
  isSubmit: boolean = false;
  roleArray: Role[] = [];
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private toastrService: ToastrService,
    private router: Router) {

  }

  ngOnInit(): void {

    //get category id
    this.userName = this.route.snapshot.paramMap.get('username');

    // init form addCategory
    this.userForm = this.formBuilder.group({
      fullname: ['', Validators.compose([
        Validators.required,
        NoWhiteSpaceFn(),
        Validators.pattern(/^[a-z]{6,64}$/i)
      ])
      ],
      email: ['', Validators.compose([
        Validators.required,
        NoWhiteSpaceFn(),
        Validators.pattern(/^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/)
      ])],
      gender: ['', Validators.required],
      username: ['', Validators.compose([
        Validators.required,
        NoWhiteSpaceFn(),
        Validators.pattern(/^[a-z]{6,32}$/i)
      ]),
        this.validateUsernameExisted.bind(this)
      ],
      role: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        NoWhiteSpaceFn(),
        Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{8,32}$/)
      ])],
      confirm_password: ['', Validators.compose([
        Validators.required,
        
      ])],
    }, {
      validators: this.validateConfirmPassword('password', 'confirm_password')
    }
    );

    // get user by username 
    if (this.userName != 0) {
      this.getUserByUsername(this.userName);
    }
    //get all role
    this.getALlRole();
  }

  getUserByUsername(username: string) {
    this.userService.getUserByUsername(username).subscribe({
      next: (response) => {
        this.userId = response.data.id;
        this.userForm.patchValue({
          fullname: response.data.fullname,
          email: response.data.email,
          gender: response.data.gender,
          username: response.data.username,
          role: response.data.role_id.id,
          password: response.data.password,
          confirm_password: response.data.password
        });
      }
    });
  }

  getALlRole() {
    this.roleService.getAllRole().subscribe({
      next: (response) => {
        this.roleArray = response.data;
      }
    });
  }

  onSubmit(): void {
    this.isSubmit = true;
    console.log(this.userForm.valid);

    if (this.userForm.valid) {
      this.createAndUpdateUser();
    }
  }

  createAndUpdateUser() {
    let user: User = new User();
    user.role_id.id = this.userForm.value.role;
    user.username = this.userForm.value.username;
    user.password = this.userForm.value.password;
    user.code = "code";
    user.fullname = this.userForm.value.fullname;
    user.email = this.userForm.value.email;
    user.gender = this.userForm.value.gender;
    user.status = 0;
    if (this.userName == 0) {
      this.userService.addUser(user).subscribe(
        {
          next: (response) => {
            this.router.navigateByUrl('/user');
            this.showSuccess('Add new user success!');
          },
          error: (err) => {
            this.showError('Add new user fail: ' + err.error.errors);
          }
        }
      );
    } else {
      user.id = this.userId;
      this.userService.updateUser(user).subscribe(
        {
          next: (response) => {
            this.router.navigateByUrl('/user');
            this.showSuccess('Update user success!');
          },
          error: (err) => {
            this.showError('Update user fail: ' + err.error.errors);
          }
        }
      );
    }
  }

  validateUsernameExisted(abstractControl: AbstractControl): Observable<ValidationErrors | null> {

    return timer(300).pipe(
      switchMap(() => this.userService.getUserByUsername(abstractControl.value).pipe(
        map((response) => {
          return response.data && response.data.username !== this.userName ? { usernameDuplicated: true } : null;
        })
      ))
    );
  }

  validateConfirmPassword(password: string, confirm_password: string) {
    return (formGroup: FormGroup) => {
      const { value: firstControlValue } = formGroup.get(password);
      const { value: secondControlValue } = formGroup.get(confirm_password);
      return firstControlValue === secondControlValue ? null : { valueNotMatch: true}
    }
  }

  showSuccess(message: string) {
    this.toastrService.success('', message, {
      timeOut: config.timeoutToast
    });
  }

  showError(message: string) {
    this.toastrService.error('', message, {
      timeOut: config.timeoutToast
    });
  }

}
