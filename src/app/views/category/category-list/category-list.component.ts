import { Component, AfterViewInit } from '@angular/core';
import { CategoryService } from "src/app/service/category.service";
import { Category } from "src/app/model/category.model";
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { config } from 'src/app/config/application.config';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'categoryName', 'descriptions', 'actions'];
  categoryArray: Category[]=[];
  subscription = Subscription.EMPTY;
  constructor(private categoryService: CategoryService, 
    private toastrService: ToastrService){
  }

  ngAfterViewInit() {
    this.getAllCategory();
  }
 
  getAllCategory(){
      this.subscription = this.categoryService.getAllCategory().subscribe({
        next: (response)=>{
          this.categoryArray = response.data;
        },
        error: (err)=>{
          console.log("Get all category error:  ", err);
        }
      }
    );
  }

  deleteCategory(id : number){
    this.categoryService.deleteCategory(id).subscribe({
      next: (response)=>{
        this.categoryArray = this.categoryArray.filter((category)=> category.id !== id)
        this.showSuccess('Delete category success');
      },
      error: (err)=>{
        console.log(err.error.errors);
        this.showError('Get all category error: '+ err);
      }
    });
  }

  showSuccess(messageErr){
    this.toastrService.success('', messageErr, {
      timeOut: config.timeoutToast,
    });
  }
  showError(messageErr){
    this.toastrService.error('', messageErr, {
      timeOut: config.timeoutToast,
    });
  }
}
