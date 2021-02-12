import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-list-all-appointment',
  templateUrl: './list-all-appointment.component.html',
  styleUrls: ['./list-all-appointment.component.css']
})
export class ListAllAppointmentComponent implements OnInit {

  appointments:Appointment[];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(data => {
      this.appointments = data;
    }),
      error => console.log(error)
  }

  DeleteAppointment(appointment):void {
    if (confirm("Are you sure you want to delete " + appointment.appId + "?")) {
      this.appointmentService.deleteAppointment(appointment.appId).subscribe(
         data => {
           this.GetAppointments();
           return true;
         },
         error => {
           console.error("Error deleting Employee!");
         }
      );
    }
  }

  GetAppointments(): void{
    this.appointmentService.getAppointments().subscribe(appointments => this.appointments = appointments);
    };


}
