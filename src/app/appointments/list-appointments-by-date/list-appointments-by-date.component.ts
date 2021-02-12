import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-list-appointments-by-date',
  templateUrl: './list-appointments-by-date.component.html',
  styleUrls: ['./list-appointments-by-date.component.css'],
  providers : [DatePipe]
})
export class ListAppointmentsByDateComponent implements OnInit {

  appointmentList : Appointment[];
  appDate:any = new Date();
 
  constructor(private appointmentService : AppointmentService,
    private datePipe: DatePipe) {
      this.appDate = this.datePipe.transform(this.appDate, 'yyyy-MM-dd');
     }

    

  ngOnInit(): void {
    console.log(this.appDate);
    this.appointmentService.getAppointmentByDate(this.appDate).subscribe(
      data => 
      {
        this.appointmentList = data,
        console.log(data);
      }
      ,
      error => console.log(error)
    );
  }

  

}
