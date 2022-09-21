import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserRoutingModule } from "./user-routing.module";
import { UserPagesComponent } from "./user-pages.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    declarations:[
        UserPagesComponent,
        HomeComponent
    ]
})
export class UserModule{

}
