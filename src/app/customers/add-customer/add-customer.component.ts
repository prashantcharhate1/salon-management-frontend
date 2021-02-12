import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private custService: CustomersService, private router: Router) { }

  ngOnInit(): void {
  }

  addCustomer(form) {
    if (form.valid) {
      this.custService.addCustomer(this.customer).subscribe(data => {
        alert("Registration Successful....");
        this.router.navigate(['/customers/login']);
      },
        error => {
          alert("Error during registration !!! ")
          // console.log(error);
        }
      );

    } else {
      alert("Some fields are empty or wrong inputs provided ... ");
    }
  }

}
