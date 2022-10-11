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
    getAllUsers(): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/user/getAlls`);
    }
    getUserByUsername(username: string): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/user/getUserByUsername?username=${username}`)
    }
    addUser(user : User): Observable<any>{
        return this.http.post<User>(`${config.apiUrl}/user/addUser`, user);
    }

    updateUser(user : User): Observable<any>{
        return this.http.put<User>(`${config.apiUrl}/user/updateUser`, user);
    }

    deleteUser(id : number): Observable<any>{
        return this.http.delete<User>(`${config.apiUrl}/user/deleteUser/${id}`);
    }

}