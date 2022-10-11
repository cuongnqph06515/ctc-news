import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "./category.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CeCategoryComponent } from "./ce-category/ce-category.component";
const routes: Routes=[
    {
        path:'',
        component: CategoryComponent,
        children:[
            {
                path: '',
                component: CategoryListComponent
            },
            {
                path: 'ce-category/:id',
                component: CeCategoryComponent
            },
        ]
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CategoryRoutingModule{

}