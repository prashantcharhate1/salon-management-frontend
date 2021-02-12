import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Payment } from '../payment';
import { Service } from '../service';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.css']
})
export class ConfirmPaymentComponent implements OnInit {

  payment: Payment = new Payment();
  appId: number;
  serviceId: number;
  service: Service = new Service();
  appointment: Appointment;


  constructor(private appointmentService: AppointmentService,
    private router: Router, private activatedRoute: ActivatedRoute) {
    this.service.serviceRate = 0;
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.appId = data.id;
    })

    this.appointmentService.getAppointmentById(this.appId).subscribe(
      data => {
        this.appointment = data;
        this.service = data.service;
        this.payment.paymentAmount = this.service.serviceRate;
      },
      error => console.log(error)
    );
  }

  saveFormDataTemp(paymentForm) {
    var paymentData = {
      paymentDate: new Date(),
      paymentStatus: "true",
      modeOfPayment: paymentForm.value.mode,  
      appId: this.appId,
      paymentAmount: this.service.serviceRate
    }
    this.appointmentService.addPayment(paymentData).subscribe();
    
    this.router.navigate(['customers/view-customer/' + this.appointment.customer.custId]);
  }

}
