import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserManagementComponent } from "./user-management.component";
import { CeUserComponent } from "./ce-user/ce-user.component";
import { UserListComponent } from "./user-list/user-list.component";
const routes: Routes=[
    {
        path:'',
        component: UserManagementComponent,
        children:[
            {
                path: '',
                component: UserListComponent
            },
            {
                path: 'ce-user/:username',
                component: CeUserComponent
            },
        ]
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class UserRoutingModule{

}