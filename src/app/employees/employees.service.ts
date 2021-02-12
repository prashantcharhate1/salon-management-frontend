import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Service } from '../site-framework/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  addEmployee(selectedFile: File, employeeBody: Employee) {
    const uploadData = new FormData();
    uploadData.append("imageFile", selectedFile);
    console.log(`sending ${employeeBody}`);
    uploadData.append("employee", JSON.stringify(employeeBody));
    return this.httpClient.post("http://localhost:8080/employee/registerWithImage", uploadData, { responseType: 'text' });
  }

  viewEmployee(employeeId): Observable<Employee>{
    const employeeUrl = "http://localhost:8080/employee/"+employeeId;
    return this.httpClient.get<Employee>(employeeUrl);
  }

  getAllEmployees(): Observable<Employee[]>{
    const employeeUrl = "http://localhost:8080/employee/getAllEmployeesByStatus";
    return this.httpClient.get<Employee[]>(employeeUrl);
  }

  getAllEmployeesByService(): Observable<Employee[]>{
    const employeeUrl = "http://localhost:8080/employee/getAllEmployeesByStatus";
    return this.httpClient.get<Employee[]>(employeeUrl);
  }

  updateEmployee(employeeBody): Observable<Employee>{
    const employeeUrl = "http://localhost:8080/employee/update";
    return this.httpClient.post<Employee>(employeeUrl,employeeBody);
  }

  deleteEmployee(employeeId): Observable<Employee>{
    const employeeUrl = "http://localhost:8080/employee/delete/"+employeeId;
    return this.httpClient.delete<Employee>(employeeUrl);
  }

}
