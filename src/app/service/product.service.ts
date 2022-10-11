import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { config } from "../config/application.config";
import { Product } from "../model/product.model";

@Injectable({
    providedIn: 'root',
})
export class ProductService{

    constructor(private http: HttpClient){
    }

    getAllProduct(): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/product/getAllProduct`);
    }

    getProductById(id : string): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/product/getProductById/${id}`);
    }

    addProduct(product : Product): Observable<any>{
        return this.http.post<Product>(`${config.apiUrl}/product/addProduct`, product);
    }

    updateProduct(product : Product): Observable<any>{
        return this.http.put<Product>(`${config.apiUrl}/product/updateProduct`, product);
    }

    deleteProduct(id : number): Observable<any>{
        return this.http.delete<Product>(`${config.apiUrl}/product/deleteProduct/${id}`);
    }
}