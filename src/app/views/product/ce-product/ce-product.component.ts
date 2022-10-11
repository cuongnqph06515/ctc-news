import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { resolveSoa } from 'dns/promises';
import { ToastrService } from 'ngx-toastr';
import { config } from 'src/app/config/application.config';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';
import { Sender } from 'src/app/model/sender.model';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { SenderService } from 'src/app/service/sender.service';

@Component({
  selector: 'app-ce-product',
  templateUrl: './ce-product.component.html',
  styleUrls: ['./ce-product.component.css']
})
export class CeProductComponent implements OnInit {

  productForm: FormGroup;
  productId: any;
  categoryList: Category[]=[];
  senderList: Sender[]=[];
  constructor(private route: ActivatedRoute, private productService: ProductService,
    private toastrService: ToastrService, private router: Router,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private senderService: SenderService) { }

  ngOnInit(): void {
    //get productId
    this.productId = this.route.snapshot.paramMap.get('id');

    //init product form
    this.productForm = this.formBuilder.group({
      name: [''],
      price: [''],
      category: [''],
      sender: [''],
      description: [''],
    });

    // get category & sender
    this.getAllCategory();
    this.getAllSender();

    if(this.productId != 0){
      this.getProductById(this.productId);
    }

  }

  getProductById(id: any): void{
    this.productService.getProductById(id).subscribe({
      next: (response)=>{
        this.productForm.patchValue({
          name: response.data.productName,
          price: response.data.price,
          category:response.data.category_id.id,
          sender: response.data.sender_id.id,
          description: response.data.descriptions
        })
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

  getAllCategory(){
    this.categoryService.getAllCategory().subscribe((response)=>{
      this.categoryList = response.data;
    });
  }

  getAllSender(){
    this.senderService.getAllSender().subscribe((response)=>{
      this.senderList = response.data;
    });
  }

  onSubmit(): void{
    if(this.productForm.valid){
      this.createAndUpdateProduct();
    }
  }

  createAndUpdateProduct() {
    let product: Product = new Product();
    product.productName = this.productForm.value.name;
    product.price = this.productForm.value.price;
    product.category_id.id = this.productForm.value.category;
    product.sender_id.id = this.productForm.value.sender;
    product.descriptions = this.productForm.value.description;
    product.code = 'LMP0438543854',
    product.status = 0;
    if (this.productId == 0) {
      this.productService.addProduct(product).subscribe(
        {
          next: (response) => {
            this.router.navigateByUrl('/product');
            this.showSuccess('Add new product success!');
          },
          error: (err) => {
            this.showError('Add new product fail: ' + err.error.errors);
          }
        }
      );
    } else {
      product.id = this.productId;
      this.productService.addProduct(product).subscribe(
        {
          next: (response) => {
            this.router.navigateByUrl('/product');
            this.showSuccess('Update product success!');
          },
          error: (err) => {
            this.showError('Update product fail: ' + err.error.errors);
          }
        }
      );
    }
  }

  showSuccess(message: string) {
    this.toastrService.success('', message, {
      timeOut: config.timeoutToast
    });
  }

  showError(message: string) {
    this.toastrService.error('', message, {
      timeOut: config.timeoutToast
    });
  }

}
