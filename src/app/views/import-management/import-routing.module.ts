import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CeImportComponent } from "./ce-import/ce-import.component";
import { ImportManagementComponent } from "./import-management.component";
import { ListImportComponent } from "./list-import/list-import.component";

const routes: Routes=[
    {
        path:'',
        component: ImportManagementComponent,
        children:[
            {
                path: '',
                component: ListImportComponent
            },
            {
                path: 'ce-import/:id',
                component: CeImportComponent
            },
        ]
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ImportRoutingModule{

}