import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.loggedIn()) {

    }
    else {
      this.router.navigate(["/employees/login"]);
    }
  }

  ListEmployee() {
    this.router.navigate(['/employees/list-all-employees']);
  }

  ListCustomer() {
    this.router.navigate(['/customers/list-all-customer']);
  }

  ListAppointment() {
    this.router.navigate(['/appointments/list-all-appointment']);
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/employees/login"]);
  }
}
