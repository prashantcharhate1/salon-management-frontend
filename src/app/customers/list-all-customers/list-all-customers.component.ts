import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-list-all-customers',
  templateUrl: './list-all-customers.component.html',
  styleUrls: ['./list-all-customers.component.css']
})
export class ListAllCustomersComponent implements OnInit {

  custList: Customer[];

  constructor(private custService: CustomersService) { }

  ngOnInit(): void {
    this.GetCustomer();
  }

  DeleteCustomer(cust):void {
    if (confirm("Are you sure you want to delete " + cust.custName + "?")) {
      this.custService.deleteCustomer(cust.custId).subscribe(
         data => {
           // refresh the list
           this.GetCustomer();
           return true;
         },
         error => {
           console.error("Error deleting Customer!");
         }
      );
    }
  }

  GetCustomer(): void{
    this.custService.getAllCustomers().subscribe(data => this.custList = data);
    };

}
