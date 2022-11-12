import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/model/role.model';
import { RoleService } from 'src/app/service/role.service';
import { catchError, of } from "rxjs";

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'role_code', 'role_name', 'descriptions', 'actions'];
  roleArray: Role[] = [];
  checked: boolean = false;
  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.getAllRole();
  }
  getAllRole(): void {
    this.roleService.getAllRole().subscribe({
      next: (response) => {
        this.roleArray = response.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  showExpand(role: Role) {
    role.expand = !role.expand;
    if (role.expand) {
      this.roleService.getSidebarByRoleId(role.id)
        .pipe(catchError((err) => of(err)))
        .subscribe({
          next: (response) => {
            if (response.data) {
              this.roleArray.map((data, index) => {
                if (data.id === role.id) {
                  this.roleArray[index].sidebar = response.data;
                }
              });
            }
          },
          error: (err) => {
            console.log(err);
          }
        });
    }
  }
}
