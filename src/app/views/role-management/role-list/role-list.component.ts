import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Role } from 'src/app/model/role.model';
import { RoleService } from 'src/app/service/role.service';
import { catchError, of } from "rxjs";
import { NzTableComponent } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit, AfterViewInit {

  roleArray: Role[] = [];
  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.getAllRole();
  }
  ngAfterViewInit(): void {
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
}
