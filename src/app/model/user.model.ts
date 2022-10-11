import { Role } from "./role.model";

export class User{
    id: number; 
    role_id: Role = new Role();   
    username: string;
    password: string;
    code: string;
    fullname: string;
    email: string;
    gender: number;
    status: number;
    constructor(){
        
    }
}