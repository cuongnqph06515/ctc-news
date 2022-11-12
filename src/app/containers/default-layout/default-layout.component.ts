import { Component, OnInit } from '@angular/core';
import { OauthService } from 'src/app/service/oauth.service';
import { RoleService } from 'src/app/service/role.service';
import { navItems } from './_nav';
import { map } from "rxjs";
import { Nav } from "src/app/model/nav.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit{

  // public navItems = navItems;
  roleId: number;
  navItems: Nav[];
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private roleService: RoleService, private authService: OauthService) {
    
  }
  ngOnInit(): void {
    // get role_id
    this.roleId = this.authService.currentUserValue.role_id.id;
    this.roleService.getSidebarByRoleId(this.roleId)
    .subscribe({
      next: (response)=>{
        this.navItems = response.data.map((data)=>{
          return {
            name: data.sidebar.name,
            url: data.sidebar.url,
            iconComponent: { name: data.sidebar.icon},
            children:null
          }
        })
      }
    });
  }
  
}
