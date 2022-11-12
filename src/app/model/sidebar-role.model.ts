import { Role } from "./role.model";
import { Sidebar } from "./sidebar.model";
import { Permission } from "./permission.model";


export class SidebarRole{
    id: number;
    role: Role = new Role();
    sidebar: Sidebar = new Sidebar();
    permission: Permission = new Permission();
}