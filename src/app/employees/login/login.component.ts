import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtResponse } from 'src/app/JwtResponse';
import { AuthService } from '../../auth.service';

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

  authenticateEmployee(loginForm) {
    if (loginForm.valid) {

      var employeeLoginData =
      {
        username: this.email,
        password: this.password
      }
      this.authService.authenticateEmployee(employeeLoginData).subscribe(JwtData => {
        this.jwtToken = JwtData
        localStorage.setItem("token", this.jwtToken.token)

        if (this.jwtToken.role == "ADMIN") {
          this.router.navigate(["/employees/admin"]);
        }
        else {
          this.router.navigate(["employees/view-employee/" + this.jwtToken.custId]);
        }

      },
        error => console.log(error)
      )
    }
    else {
      alert("Please provide email and password !!!")
    }
  }


}
