import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { config } from "../config/application.config";
import { Role } from "../model/role.model";

@Injectable({
    providedIn: 'root',
})
export class RoleService{

    constructor(private http: HttpClient){
    }

    getAllRole(): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/role/getAllRole`);
    }

    getRoleById(id : string): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/role/getRoleById/${id}`);
    }

    addRole(role : Role): Observable<any>{
        return this.http.post<Role>(`${config.apiUrl}/role/addRole`, role);
    }

    updateRole(role : Role): Observable<any>{
        return this.http.put<Role>(`${config.apiUrl}/role/updateRole`, role);
    }

    deleteRole(id : number): Observable<any>{
        return this.http.delete<Role>(`${config.apiUrl}/role/deleteRole/${id}`);
    }

    getSidebarByRoleId(id: number): Observable<any>{
        return this.http.get<any>(`${config.apiUrl}/role/getSidebarByRoleId/${id}`)
    }
}