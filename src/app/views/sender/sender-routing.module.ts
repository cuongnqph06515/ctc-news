import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateEditComponent } from "./create-edit/create-edit.component";
import { SenderListComponent } from "./sender-list/sender-list.component";
import { SenderComponent } from "./sender.component";

const routes: Routes = [
    {
      path: '',
      component: SenderComponent,
      children: [
        {
          path: '',
          component: SenderListComponent,
        },
        {
          path: 'ce-sender/:id',
          component: CreateEditComponent,
        },
      ],
    },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SenderRoutingModule {

}