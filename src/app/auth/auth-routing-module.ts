import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from '../componentes/dashboard/dashboard';
import { authGuard } from './auth-guard';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
  routes: Routes = [
    {path: 'login', component: Login},
    {path: 'dashboard', component: Dashboard, canActivate: [authGuard]},
    {path: '**', redirectTo: 'login'}
  ];

 }
