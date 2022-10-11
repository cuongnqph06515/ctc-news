import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoryRoutingModule } from "./category-routing.module";
import { CategoryComponent } from "./category.component";
import { CeCategoryComponent } from './ce-category/ce-category.component';
import { ToastrModule } from "ngx-toastr";


@NgModule({
    imports: [
        CommonModule,
        CategoryRoutingModule,
        ToastrModule.forRoot(),
        MatTableModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
    declarations:[
        CategoryComponent, 
        CategoryListComponent, 
        CeCategoryComponent,
    ]
})
export class CategoryModule{
    
}