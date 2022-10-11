import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then((m)=> m.DashboardModule),
      },
      {
        path:'sender',
        loadChildren: () => import('./views/sender/sender.module').then((m)=> m.SenderModule),
      },
      {
        path:'category',
        loadChildren: () => import('./views/category/category.module').then((m)=> m.CategoryModule),
      },
      {
        path:'product',
        loadChildren: () => import('./views/product/product.module').then((m)=> m.ProductModule),
      },
      {
        path:'role',
        loadChildren: () => import('./views/role-management/role.module').then((m)=> m.RoleModule),
      },
      {
        path:'user',
        loadChildren: () => import('./views/user-management/user.module').then((m)=> m.UserModule),
      }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
