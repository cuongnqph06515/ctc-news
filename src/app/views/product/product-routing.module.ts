import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CeProductComponent } from "./ce-product/ce-product.component";
const routes: Routes=[
    {
        path:'',
        component: ProductComponent,
        children:[
            {
                path: '',
                component: ProductListComponent
            },
            {
                path: 'ce-product/:id',
                component: CeProductComponent
            },
        ]
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ProductRoutingModule{

}