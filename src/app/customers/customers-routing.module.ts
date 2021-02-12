import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';

import { CustomersComponent } from './customers.component';
import { ListAllCustomersComponent } from './list-all-customers/list-all-customers.component';
import { LoginComponent } from './login/login.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [{ path: '', component: CustomersComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'list-all-customer', component: ListAllCustomersComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'view-customer/:id' , component: ViewCustomerComponent },
  { path: 'update-customer/:id' , component: UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
