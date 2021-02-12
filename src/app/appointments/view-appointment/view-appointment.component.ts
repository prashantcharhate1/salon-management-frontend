import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  toggleOn:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
