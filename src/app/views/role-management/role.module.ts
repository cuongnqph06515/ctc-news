import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { ToastrModule } from "ngx-toastr";
import { CeRoleComponent } from "./ce-role/ce-role.component";
import { RoleListComponent } from "./role-list/role-list.component";
import { RoleManagementComponent } from "./role-management.component";
import { RoleRoutingModule } from "./role-routing.module";

@NgModule({
    imports: [
        CommonModule,
        RoleRoutingModule,
        ToastrModule.forRoot(),
        MatTableModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
    declarations:[
        RoleManagementComponent,
        RoleListComponent,
        CeRoleComponent
    ]
})
export class RoleModule{
    
}