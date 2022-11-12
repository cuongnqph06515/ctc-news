import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HubManagementComponent } from "./hub-management.component";
import { HubListComponent } from "./hub-list/hub-list.component";
import { CeHubComponent } from "./ce-hub/ce-hub.component";
const routes: Routes=[
    {
        path:'',
        component: HubManagementComponent,
        children:[
            {
                path: '',
                component: HubListComponent
            },
            {
                path: 'ce-hub/:id',
                component: CeHubComponent
            },
        ]
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HubRoutingModule{

}