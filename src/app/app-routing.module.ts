import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditMetricsformComponent } from './edit-metricsform/edit-metricsform.component';
import { MetricsFormComponent } from './metrics-form/metrics-form.component';
import { AuthGuard } from './services/auth.guard';
import { AuthdeactivateGuard } from './services/authdeactivate.guard';
import { TokenFormComponent } from './token-form/token-form.component';

const routes: Routes = [
 {
   path:"",
   component:DashboardComponent
 },
 {
  path: "token-form",
  component: TokenFormComponent
},
{
  path: "metrics-form",
  canActivate: [AuthGuard],
  canDeactivate: [AuthdeactivateGuard],
  component: MetricsFormComponent
},
{
  path: "edit-metrics/:id",
  canActivate: [AuthGuard],
  canDeactivate: [AuthdeactivateGuard],
  component:EditMetricsformComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
