import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthGuard} from "./auth/auth.guard";
import {Roles} from "./enums/role";

const routes: Routes = [
  { path: 'register-user', component: RegisterComponent, canActivate: [AuthGuard], data: { role: Roles.Admin }, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
