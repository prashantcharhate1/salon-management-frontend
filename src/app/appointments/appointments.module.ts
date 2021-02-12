import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { FormsModule } from '@angular/forms';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ListAllAppointmentComponent } from './list-all-appointment/list-all-appointment.component';
import { ConfirmPaymentComponent } from './confirm-payment/confirm-payment.component';
import { ListAppointmentsByDateComponent } from './list-appointments-by-date/list-appointments-by-date.component';


@NgModule({
  declarations: [AppointmentsComponent, BookAppointmentComponent, ViewAppointmentComponent, ListAllAppointmentComponent, ConfirmPaymentComponent, ListAppointmentsByDateComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    FormsModule
  ],
  exports: [BookAppointmentComponent,ViewAppointmentComponent,ConfirmPaymentComponent,ListAllAppointmentComponent,ListAppointmentsByDateComponent]
})
export class AppointmentsModule { }
