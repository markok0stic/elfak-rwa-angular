import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {PeriodSchedulerComponent} from "./components/period-scheduler/period-scheduler.component";

const routes: Routes = [

  { path: '', component: HomeComponent/*, canActivate: [AuthGuard], data: { role: Roles.Admin },*/ },
  { path: 'register-user', component: RegisterComponent/*, canActivate: [AuthGuard], data: { role: Roles.Admin },*/ },
  { path: 'schedule-period', component: PeriodSchedulerComponent/*, canActivate: [AuthGuard], data: { role: Roles.Admin },*/ }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
