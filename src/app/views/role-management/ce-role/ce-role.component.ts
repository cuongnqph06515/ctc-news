import { Component, InjectionToken, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { routeSnapshotParamFactory } from "src/app/commons/data-from-activated-route";
import { Role } from 'src/app/model/role.model';
import { RoleService } from 'src/app/service/role.service';

export const ROLE_ID = new InjectionToken<string>(
  'role id in url'
);

@Component({
  selector: 'app-ce-role',
  templateUrl: './ce-role.component.html',
  styleUrls: ['./ce-role.component.css'],
  providers: [
    {
      provide: ROLE_ID,
      useFactory: routeSnapshotParamFactory('id'),
      deps: [ActivatedRoute]
    }
  ]
})
export class CeRoleComponent implements OnInit {

  objRole: Role;
  constructor(@Inject(ROLE_ID) private id: number, private roleService: RoleService) { }

  ngOnInit(): void {
    this.getRoleById(this.id);
  }

  // get role by id
  getRoleById(role_id: number): void{
    this.roleService.getRoleById(role_id).subscribe({
      next: (response)=>{
        this.objRole = response.data;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }
  // getSidebarByRoleId(){
  //   this.roleService.getSidebarByRoleId(this.id)
  //       .pipe(catchError((err) => of(err)))
  //       .subscribe({
  //         next: (response) => {
  //           if (response.data) {
  //             this.roleArray.map((data, index) => {
  //               if (data.id === role.id) {
  //                 this.roleArray[index].sidebar = response.data;
  //               }
  //             });
  //           }
  //         },
  //         error: (err) => {
  //           console.log(err);
  //         }
  //       });

  // }
}

