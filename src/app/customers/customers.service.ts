import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient) { }

  addCustomer(CustomerBody): Observable<Customer>{
    const CustomerUrl = "http://localhost:8080/customer/register";
    return this.httpClient.post<Customer>(CustomerUrl,CustomerBody);
  }

  viewCustomer(custId): Observable<Customer>{
    const CustomerUrl = "http://localhost:8080/customer/"+custId;
    return this.httpClient.get<Customer>(CustomerUrl);
  }

  getAllCustomers(): Observable<Customer[]>{
    const CustomerUrl = "http://localhost:8080/customer/getAllCustomersByStatus";
    return this.httpClient.get<Customer[]>(CustomerUrl);
  }

  updateCustomer(CustomerBody): Observable<Customer>{
    const CustomerUrl = "http://localhost:8080/customer/update";
    return this.httpClient.post<Customer>(CustomerUrl,CustomerBody);
  }

  deleteCustomer(custId): Observable<Customer>{
    const CustomerUrl = "http://localhost:8080/customer/delete/"+custId;
    return this.httpClient.delete<Customer>(CustomerUrl);
  }

  
 
}
