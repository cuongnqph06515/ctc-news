import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { config } from "../config/application.config";
import { ImportDetail } from "../model/import-detail.model";

@Injectable({
    providedIn: 'root'
})
export class ImportDetailService{
    constructor(private http: HttpClient){
    }

    getAllImportDetail(): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/import-detail/getAllImportDetail`);
    }

    getImportDetailByImportId(id : string): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/import-detail/getImportDetailByImportId/${id}`);
    }

    addImportDetail(importDetail : ImportDetail): Observable<any>{
        return this.http.post<ImportDetail>(`${config.apiUrl}/import-detail/addImportDetail`, importDetail);
    }

    updateImportDetail(importDetail : ImportDetail): Observable<any>{
        return this.http.put<ImportDetail>(`${config.apiUrl}/import-detail/updateImportDetail`, importDetail);
    }

    deleteImportDetail(id : number): Observable<any>{
        return this.http.delete<ImportDetail>(`${config.apiUrl}/import-detail/deleteImportDetail/${id}`);
    }
}