import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/appointments/appointment';
import { AppointmentService } from 'src/app/appointments/appointment.service';
import { AuthService } from 'src/app/auth.service';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customer: Customer = new Customer() ;
  custId:number;
  checked:boolean = false;
  appointmentList:Appointment[];

  constructor(private customerService: CustomersService,
    private activatedRoute: ActivatedRoute,private router: Router,
    private appointmentService: AppointmentService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.custId = data.id;
    });
    if(this.authService.loggedIn()){
      this.customerService.viewCustomer(this.custId).subscribe(data => {
        this.customer = data
        this.appointmentService.getAppointmentByCustomer(this.customer).subscribe(
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
      this.router.navigate(["/customers/login"]);
    }
    
  }

  DeleteCustomer(cust):void {
    if (confirm("Are you sure you want to delete " + cust.custName + "?")) {
      this.customerService.deleteCustomer(cust.custId).subscribe(
         data => {
          localStorage.removeItem("token");
          this.router.navigate(["customers/login"]);
           return true;
           
         },
         error => {
           console.error("Error deleting Customer!");
         }
      );
    }
  }
  onCheckAppointments() {
    this.checked = !this.checked;
  }

  logout()
  {
    localStorage.removeItem("token");
    this.router.navigate(["/customers/login"]);
    
  }
}
