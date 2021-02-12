import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ListAllEmployeesComponent } from './list-all-employees/list-all-employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ListAllEmployeesByServiceComponent } from './list-all-employees-by-service/list-all-employees-by-service.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { CustomersModule } from '../customers/customers.module';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AppointmentsModule } from '../appointments/appointments.module';
import { ListAppointmentsByDateComponent } from '../appointments/list-appointments-by-date/list-appointments-by-date.component';


@NgModule({
  declarations: [
    EmployeesComponent, 
    AddEmployeeComponent, 
    ViewEmployeeComponent, 
    ListAllEmployeesComponent,  
    UpdateEmployeeComponent, 
    ListAllEmployeesByServiceComponent,
    ConfirmEqualValidatorDirective,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomersModule,
    AppointmentsModule
  ],
  exports: [ListAllEmployeesByServiceComponent]
})
export class EmployeesModule { }
