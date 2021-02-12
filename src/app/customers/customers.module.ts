import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListAllCustomersComponent } from './list-all-customers/list-all-customers.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { LoginComponent } from './login/login.component';
import { ConfirmPassEqualValidatorDirective } from './shared/confirm-pass-equal-validator.directive';
import { AppointmentsModule } from '../appointments/appointments.module';




@NgModule({
  declarations: [CustomersComponent, AddCustomerComponent, ListAllCustomersComponent, ViewCustomerComponent, UpdateCustomerComponent, DeleteCustomerComponent, LoginComponent,
    ConfirmPassEqualValidatorDirective],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    AppointmentsModule
  ],
  exports: [CustomersComponent,
    AddCustomerComponent,
    ListAllCustomersComponent,
    ViewCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    LoginComponent,
    ConfirmPassEqualValidatorDirective
  ]
})
export class CustomersModule { }
