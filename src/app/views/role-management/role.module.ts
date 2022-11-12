import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
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
        ReactiveFormsModule,
        // ng.ant.design
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzSelectModule,
        NzCardModule,
        NzTableModule,
        NzDividerModule,
        NzIconModule,
        NzCheckboxModule,
        NzToolTipModule,

        FormsModule
    ],
    declarations:[
        RoleManagementComponent,
        RoleListComponent,
        CeRoleComponent
        
    ]
})
export class RoleModule{
    
}