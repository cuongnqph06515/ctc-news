import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { config } from "../config/application.config";
import { Sender } from "../model/sender.model";

@Injectable({
    providedIn: 'root',
})
export class SenderService{

    constructor(private http: HttpClient){
    }

    getAllSender(): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/sender/getAllSender`);
    }

    getSenderById(id : string): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/sender/getSenderById/${id}`);
    }

    addSender(sender : Sender): Observable<any>{
        return this.http.post<Sender>(`${config.apiUrl}/sender/addSender`, sender);
    }

    updateSender(sender : Sender): Observable<any>{
        return this.http.put<Sender>(`${config.apiUrl}/sender/updateSender`, sender);
    }

    deleteSender(id : number): Observable<any>{
        return this.http.delete<Sender>(`${config.apiUrl}/sender/deleteSender/${id}`);
    }
}