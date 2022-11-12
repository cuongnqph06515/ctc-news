import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { ToastrModule } from "ngx-toastr";
import { NzFormModule } from "ng-zorro-antd/form";
import {  ImportRoutingModule } from "./import-routing.module";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SelectControlComponent } from "../custom-tag/select-control/select-control.component";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { ModeDatasourceDirective } from "../custom-tag/select-control/directives/mode-data-source.directive";
import { ImportManagementComponent } from "./import-management.component";
import { ListImportComponent } from "./list-import/list-import.component";
import { CeImportComponent } from "./ce-import/ce-import.component";

@NgModule({
    imports: [
        CommonModule,
        ImportRoutingModule,
        ToastrModule.forRoot(),
        MatTableModule,
        MatButtonModule,
        ReactiveFormsModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzSelectModule,
        NzCardModule
        ,NzTableModule,
        NzDividerModule
        
    ],
    declarations:[
        ImportManagementComponent,
        ListImportComponent,
        CeImportComponent,
     
    ]
})
export class ImportModule{
    
}