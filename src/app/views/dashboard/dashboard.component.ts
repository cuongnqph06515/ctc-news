import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userList$!: Observable<User>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userList$ = this.userService.getAllUsers();
    this.userList$.subscribe();
  }
}
