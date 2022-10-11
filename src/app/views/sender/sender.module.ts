import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { ToastrModule } from "ngx-toastr";
import { CreateEditComponent } from "./create-edit/create-edit.component";
import { SenderListComponent } from "./sender-list/sender-list.component";
import { SenderRoutingModule } from "./sender-routing.module";
import { SenderComponent } from "./sender.component";

@NgModule({
    imports: [
        CommonModule,
        SenderRoutingModule,
        ToastrModule.forRoot(),
        MatTableModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
    declarations:[
        SenderComponent,
        SenderListComponent,
        CreateEditComponent
    ]
})
export class SenderModule{
    
}