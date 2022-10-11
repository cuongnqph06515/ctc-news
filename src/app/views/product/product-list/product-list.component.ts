import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { config } from 'src/app/config/application.config';
import { Product } from "src/app/model/product.model";
import { ProductService } from "src/app/service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'code', 'productName', 'price', 'category', 'sender', 'descriptions', 'actions'];
  productArray: Product[] = [];
  constructor(private productService: ProductService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct(): void {
   this.productService.getAllProduct().subscribe({
    next: (response)=>{
      this.productArray = response.data;
    },
    error: (err)=>{
      console.log(err);
    }
   });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: (response) => {
        this.productArray = this.productArray.filter((user) => user.id !== id)
        this.showSuccess('Delete product success');
      },
      error: (err) => {
        console.log(err.error.errors);
        this.showError('Get all product error: ' + err);
      }
    });
  }

  showSuccess(messageErr) {
    this.toastrService.success('', messageErr, {
      timeOut: config.timeoutToast,
    });
  }
  showError(messageErr) {
    this.toastrService.error('', messageErr, {
      timeOut: config.timeoutToast,
    });
  }



}
