import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { OauthService } from 'src/app/service/oauth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userList$: Observable<User>;
  constructor(private userService: UserService, private oauthService: OauthService) { }

  ngOnInit(): void {
    this.userList$ = this.userService.getAllUsers();
    this.userList$.subscribe((data)=> console.log(data)
    );
  }
}

