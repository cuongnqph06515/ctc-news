import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { config } from "../config/application.config";
import { Import } from "../model/import.model";


@Injectable({
    providedIn: 'root'
})
export class ImportService{
    constructor(private http: HttpClient){
    }

    getAllImport(): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/import/getAllImport`);
    }

    getImportById(id : string): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/import/getImportById/${id}`);
    }

    addImport(anImport : Import): Observable<any>{
        return this.http.post<Import>(`${config.apiUrl}/import/addImport`, anImport);
    }

    updateImport(anImport : Import): Observable<any>{
        return this.http.put<Import>(`${config.apiUrl}/import/updateImport`, anImport);
    }

    deleteImport(id : number): Observable<any>{
        return this.http.delete<Import>(`${config.apiUrl}/import/deleteImport/${id}`);
    }
}