import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { config } from "../config/application.config";
import { Category } from "../model/category.model";

@Injectable({
    providedIn: 'root',
})
export class CategoryService{

    constructor(private http: HttpClient){
    }

    getAllCategory(): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/category/getAllCategory`);
    }

    getCategoryById(id : string): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/category/getCategoryById/${id}`);
    }

    addCategory(category : Category): Observable<any>{
        return this.http.post<Category>(`${config.apiUrl}/category/addCategory`, category);
    }

    updateCategory(category : Category): Observable<any>{
        return this.http.put<Category>(`${config.apiUrl}/category/updateCategory`, category);
    }

    deleteCategory(id : number): Observable<any>{
        return this.http.delete<Category>(`${config.apiUrl}/category/deleteCategory/${id}`);
    }
}