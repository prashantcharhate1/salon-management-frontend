import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ListAllEmployeesComponent } from './list-all-employees/list-all-employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ListAllEmployeesByServiceComponent } from './list-all-employees-by-service/list-all-employees-by-service.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'view-employee/:id', component: ViewEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'service/:id', component: ListAllEmployeesByServiceComponent },
  { path: 'list-all-employees', component: ListAllEmployeesComponent },
  { path: 'list-all-employees-by-service', component: ListAllEmployeesByServiceComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent}
  // { path: 'customers', loadChildren: () => import('../customers/customers.module').then(m => m.CustomersModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
