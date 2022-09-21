import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {
    path: 'admin',
    loadChildren: () => import('./admin-pages/admin.module').then((m)=> m.AdminModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./user-pages/user.module').then((m)=> m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
