import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtResponse } from 'src/app/JwtResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }

  authenticateEmployee(employeeLoginCredentials: any): Observable<JwtResponse> {
    return this.http.post<JwtResponse>("http://localhost:8080/authenticate/employee", employeeLoginCredentials);
  }

  authenticateCustomer(loginCredentials: any): Observable<JwtResponse> {
    return this.http.post<JwtResponse>("http://localhost:8080/authenticate/customer", loginCredentials);
  }

  loggedIn()
  {
    //here !! is used to send boolean value no the token so when token is present then it will send true
    return !!localStorage.getItem("token");
  }

}
