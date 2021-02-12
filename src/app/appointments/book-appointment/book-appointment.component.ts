import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getLocalStorage } from 'ngx-webstorage/lib/core/nativeStorage';
import { Customer } from 'src/app/customers/customer';
import { Employee } from 'src/app/employees/employee';
import { EmployeesService } from 'src/app/employees/employees.service';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Service } from '../service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();
  serviceList: Service[];
  employeeList: Employee[];
  service: Service;
  custId: number;
  appId: number;
  serviceRate: number;
  selectedService: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private appointmentService: AppointmentService,
    private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.custId = data.id;
      this.appointment.customer = data.id;
    });
    this.appointmentService.getServices().subscribe(data =>
      this.serviceList = data)
      , error => console.log(error);
    this.employeeService.getAllEmployees().subscribe(data =>
      this.employeeList = data)
      , error => console.log(error);
  }


  public onServiceselection(event) {
    console.log(event);
    this.selectedService = event.target.value;
    this.appointmentService.getServiceById(this.selectedService).subscribe(data => {
      this.service = data;
      this.serviceRate = data.serviceRate;
    }
    ),
      error => console.log(error);
  }

  saveFormDataTemp(appointmentForm) {
    if (appointmentForm.valid) {
      this.appointmentService.addAppointment(this.appointment).subscribe(data => {
        this.appId = data.appId,
        this.appointment = data;   
        this.router.navigate(['appointments/confirm-payment', this.appId]);
      },
      
        error => console.log(error));

      alert("Appointment Added....");
    }
    else {
      alert("Some fields are empty or wrong inputs provided");
    }
  }

}
