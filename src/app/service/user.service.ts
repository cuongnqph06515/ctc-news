import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { config } from "../config/application.config";
import { User } from "../model/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    constructor(private http: HttpClient){

    }
    getAllUsers(): Observable<User>{
        return this.http.get<User>(`${config.apiUrl}/user/getAlls`);
    }
}