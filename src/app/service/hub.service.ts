import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { config } from "../config/application.config";
import { Hub } from "../model/hub.model";

@Injectable({
    providedIn: 'root'
})
export class HubService{
    constructor(private http: HttpClient){
    }

    getAllHub(): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/hub/getAllHub`);
    }

    getHubById(id : string): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/hub/getHubById/${id}`);
    }

    addHub(hub : Hub): Observable<any>{
        return this.http.post<Hub>(`${config.apiUrl}/hub/addHub`, hub);
    }

    updateHub(hub : Hub): Observable<any>{
        return this.http.put<Hub>(`${config.apiUrl}/hub/updateHub`, hub);
    }

    deleteHub(id : number): Observable<any>{
        return this.http.delete<Hub>(`${config.apiUrl}/hub/deleteHub/${id}`);
    }
}