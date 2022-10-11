import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoleManagementComponent } from "./role-management.component";
import { RoleListComponent } from "./role-list/role-list.component";
import { CeRoleComponent } from "./ce-role/ce-role.component";

const routes: Routes=[
    {
        path:'',
        component: RoleManagementComponent,
        children:[
            {
                path: '',
                component: RoleListComponent
            },
            {
                path: 'ce-role/:id',
                component: CeRoleComponent
            },
        ]
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RoleRoutingModule{

}