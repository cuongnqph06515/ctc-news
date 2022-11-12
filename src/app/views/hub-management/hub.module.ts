import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { ToastrModule } from "ngx-toastr";
import { CeHubComponent } from "./ce-hub/ce-hub.component";
import { HubListComponent } from "./hub-list/hub-list.component";
import { HubManagementComponent } from "./hub-management.component";
import { HubRoutingModule } from "./hub-routing.module";
import { SelectControlComponent } from "../custom-tag/select-control/select-control.component";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { ModeDatasourceDirective } from "../custom-tag/select-control/directives/mode-data-source.directive";

@NgModule({
    imports: [
        CommonModule,
        HubRoutingModule,
        ToastrModule.forRoot(),
        MatTableModule,
        MatButtonModule,
        ReactiveFormsModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzSelectModule,
        NzCardModule,
        NzTableModule,
        NzDividerModule
        
    ],
    declarations:[
        HubManagementComponent,
        HubListComponent,
        CeHubComponent,
        SelectControlComponent,
        ModeDatasourceDirective
    ]
})
export class HubModule{}