import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Service } from '../appointments/service';
import { Customer } from '../customers/customer';
import { Appointment } from './appointment';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>("http://localhost:8080/service/getAllServices/");
  }

  getServiceById(serviceId: number): Observable<Service> {
    return this.http.get<Service>("http://localhost:8080/service/" + serviceId);
  }

  addAppointment(appointment: Appointment): Observable<Appointment> {
    const uploadData = new FormData();
    console.log(`sending ${appointment}`);
    uploadData.append("appointment", JSON.stringify(appointment));
    return this.http.post<Appointment>("http://localhost:8080/appointment/bookAppointment/", uploadData);
  }

  getAppointmentById(appId: number): Observable<Appointment> {
    return this.http.get<Appointment>("http://localhost:8080/appointment/" + appId);
  }

  getAppointmentByDate(appDate: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>("http://localhost:8080/appointment/getAppointmentsByDateAndEmployee/" + appDate);
  }

  getAppointmentByDateAndEmployee(appDate: string, employee: any): Observable<Appointment[]> {
    return this.http.post<Appointment[]>("http://localhost:8080/appointment/getAppointmentsByDateAndEmployee/" + appDate, employee);
  }
  getAppointmentByCustomer(customer: Customer): Observable<Appointment[]> {
    return this.http.post<Appointment[]>("http://localhost:8080/appointment/getByCustomer/", customer);
  }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>("http://localhost:8080/appointment/getAllAppointments/");
  }

  deleteAppointment(appId): Observable<Appointment> {
    const appointmentUrl = "http://localhost:8080/appointment/delete/" + appId;
    return this.http.delete<Appointment>(appointmentUrl);
  }

  confirmPayment(paymentData): Observable<Payment> {

    return this.http.post<Payment>("http://localhost:8080/payment/register", paymentData);
  }

  addPayment(payment: any): Observable<Payment> {
    return this.http.post<Payment>("http://localhost:8080/payment/register", payment);
  }
  
}

