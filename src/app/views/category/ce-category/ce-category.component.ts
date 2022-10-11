
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/service/category.service';
import { NoWhiteSpaceFn } from "src/app/validators/NoWhiteSpaceFn.validator";
import { tap } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { config } from 'src/app/config/application.config';

@Component({
  selector: 'app-ce-category',
  templateUrl: './ce-category.component.html',
  styleUrls: ['./ce-category.component.css']
})
export class CeCategoryComponent implements OnInit {

  caregoryForm: FormGroup;
  categoryId: any;
  isSubmit: boolean = false;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, 
    private categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    //get category id
    this.categoryId = this.route.snapshot.paramMap.get('id');

    // init form addCategory
    this.caregoryForm = this.fb.group({
      categoryName: ['', Validators.compose([
        Validators.required,
        NoWhiteSpaceFn(),
        Validators.minLength(6),
        Validators.maxLength(64)
      ])],
      descriptions: ['', Validators.compose([
        NoWhiteSpaceFn(),
      ])],
    })

    //get category by id
    if (this.categoryId != 0) {
      this.categoryService.getCategoryById(this.categoryId).pipe(
        ).subscribe({
        next: (response) => {
          this.caregoryForm.patchValue({
            categoryName:response.data.categoryName,
            descriptions:response.data.descriptions
          })
        },
        error: (err)=>{
          console.log(err);
        }
      });
    }
  }

  onSubmit(): void {
    this.isSubmit = true;
    if(this.caregoryForm.valid){
      this.createAndUpdateCategory();
    }
  }

  createAndUpdateCategory() {
    let category: Category = new Category();
    category.categoryName = this.caregoryForm.value.categoryName;
    category.descriptions = this.caregoryForm.value.descriptions;
      if(this.categoryId==0){
        this.categoryService.addCategory(category).subscribe(
          {
            next: (response)=>{
              this.router.navigateByUrl('/category');
              this.showSuccess('Add new category success!');
            },
            error: (err)=>{
              this.showError('Add new category fail: ' + err);
            }
          }
        );
      }else{
        category.id = this.categoryId;
        this.categoryService.updateCategory(category).subscribe(
          {
            next: (response)=>{
              this.router.navigateByUrl('/category');
              this.showSuccess('Update category success!');
            },
            error: (err)=>{
              this.showError('Update category fail: '+ err);
            }
          }
        );
      }
  }

  showSuccess(message: string){
    this.toastr.success('', message,{
      timeOut: config.timeoutToast
    });
  }

  showError(message: string){
    this.toastr.error('', message,{
      timeOut: config.timeoutToast
    });
  }
}
