import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsComponent } from './appointments.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ConfirmPaymentComponent } from './confirm-payment/confirm-payment.component';
import { ListAllAppointmentComponent } from './list-all-appointment/list-all-appointment.component';
import { ListAppointmentsByDateComponent } from './list-appointments-by-date/list-appointments-by-date.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';

const routes: Routes = [{ path: '', component: AppointmentsComponent },
{path: 'book-appointment/:id' , component: BookAppointmentComponent},
{path: 'view-appointment' , component: ViewAppointmentComponent},
{path: 'list-all-appointment' , component: ListAllAppointmentComponent},
{path: 'list-all-appointment-by-date/:appDate' , component: ListAppointmentsByDateComponent},
{path: 'confirm-payment/:id', component: ConfirmPaymentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
