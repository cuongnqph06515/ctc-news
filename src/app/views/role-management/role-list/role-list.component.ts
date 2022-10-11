import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/model/role.model';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'role_code', 'role_name', 'descriptions', 'actions'];
  roleArray: Role[] = [];

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
      this.getAllRole();
  }
  getAllRole(): void {
    this.roleService.getAllRole().subscribe({
      next: (response)=>{
        this.roleArray = response.data;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }
}
