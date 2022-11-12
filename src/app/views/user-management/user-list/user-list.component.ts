import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { config } from 'src/app/config/application.config';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  userArray: User[] = [];
  constructor(private userService: UserService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.userArray = response.data;
      },
      error: (err) => {
        console.log("Get all user error:  ", err);
      }
    }
    );
  }

  deleteCategory(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (response) => {
        this.userArray = this.userArray.filter((user) => user.id !== id)
        this.showSuccess('Delete user success');
      },
      error: (err) => {
        console.log(err.error.errors);
        this.showError('Get all user error: ' + err);
      }
    });
  }

  showSuccess(messageErr) {
    this.toastrService.success('', messageErr, {
      timeOut: config.timeoutToast,
    });
  }
  showError(messageErr) {
    this.toastrService.error('', messageErr, {
      timeOut: config.timeoutToast,
    });
  }

}
