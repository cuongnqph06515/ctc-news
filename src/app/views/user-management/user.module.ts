import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";

import { ToastrModule } from "ngx-toastr";
import { CeUserComponent } from "./ce-user/ce-user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserManagementComponent } from "./user-management.component";
import { UserRoutingModule } from "./user-routing.module";
import { NzSelectModule } from "ng-zorro-antd/select";
import { FormModule } from "@coreui/angular";


@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        ToastrModule.forRoot(),
        MatTableModule,
        MatButtonModule,
        NzSelectModule,
        ReactiveFormsModule,
        FormModule
    ],
    declarations:[
        UserManagementComponent,
        UserListComponent,
        CeUserComponent
    ]
})
export class UserModule{
    
}