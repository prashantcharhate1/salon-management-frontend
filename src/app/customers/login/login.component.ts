import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../customers.service';

import { JwtResponse } from '../../JwtResponse';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  jwtToken: JwtResponse;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  authenticateCustomer(loginForm) {
    if (loginForm.valid) {
      var loginCredentials =
      {
        username: this.email,
        password: this.password
      }

      this.authService.authenticateCustomer(loginCredentials).subscribe(jwtToken => {
        this.jwtToken = jwtToken;
        localStorage.setItem("token", this.jwtToken.token);
        alert("Login Successful");
        this.router.navigate(["/customers/view-customer/" + this.jwtToken.custId]);
      }
        ,
        error => alert("Invalid login credentials !!")

      )
    }
    else {
      alert("Please provide email address & password !!!")
    }
  }

}
