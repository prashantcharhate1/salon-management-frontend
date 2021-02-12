import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/appointments/appointment';
import { AppointmentService } from 'src/app/appointments/appointment.service';
import { AuthService } from 'src/app/auth.service';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
  providers: [DatePipe]
})
export class ViewEmployeeComponent implements OnInit {

  employeeId = 0;
  employee: Employee = new Employee();
  checked: boolean = false;
  appointmentList: Appointment[];
  appDate: any = new Date();

  constructor(private employeeService: EmployeesService,private router:Router,
    private activatedRoute: ActivatedRoute,
    private appointmentService: AppointmentService,
    private datePipe: DatePipe,
    private authService: AuthService) {
    this.appDate = this.datePipe.transform(this.appDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(data => {
        this.employeeId = data.id;
      });
      if(this.authService.loggedIn()){
        this.employeeService.viewEmployee(this.employeeId).subscribe(data => {
          this.employee = data
          this.appointmentService.getAppointmentByDateAndEmployee(this.appDate, this.employee).subscribe(
            data => {
              this.appointmentList = data
            }
            ,
            error => console.log(error)
          );
        },
          error => console.error(error)
        );  
      }else{
        this.router.navigate(["/employees/login"]);
      }
          
    
  }

  onCheckAppointments() {
    this.checked = !this.checked;
  }

  logout()
  {
    localStorage.removeItem("token");
    this.router.navigate(["/employees/login"]);
    
  }

}

