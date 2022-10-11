import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { ToastrModule } from "ngx-toastr";
import { CeProductComponent } from "./ce-product/ce-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";

@NgModule({
    imports: [
        CommonModule,
        ProductRoutingModule,
        ToastrModule.forRoot(),
        MatTableModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
    declarations:[
        ProductComponent,
        ProductListComponent,
        CeProductComponent
    ]
})
export class ProductModule{
    
}