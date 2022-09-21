import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminPagesComponent } from "./admin-pages.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations:[
        AdminPagesComponent,
        DashboardComponent
    ]
})
export class AdminModule{

}
