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
import { FormModule } from "@coreui/angular";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";


@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        ToastrModule.forRoot(),
        MatTableModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormModule,

        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzCardModule,
        NzTableModule,
        NzDividerModule

    ],
    declarations:[
        UserManagementComponent,
        UserListComponent,
        CeUserComponent
    ]
})
export class UserModule{
    
}