import { SidebarRole } from "./sidebar-role.model";
import { Sidebar } from "./sidebar.model";

export class Role{
    id: number;
    role_code: string;
    role_name: string;
    description: string;
    expand?: boolean;
    sidebar: SidebarRole[]=[];
    constructor(){
        
    }
}