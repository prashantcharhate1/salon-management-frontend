import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { ListAllEmployeesComponent } from './employees/list-all-employees/list-all-employees.component';
import { SidebarComponent } from './site-framework/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: SidebarComponent },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: 'site-framework',
    loadChildren: () => import('./site-framework/site-framework.module').then(m => m.SiteFrameworkModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
    // canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
