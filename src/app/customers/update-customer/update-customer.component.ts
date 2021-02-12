import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  custId = 0;
  customer: Customer = new Customer();

  constructor(private custService: CustomersService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.custId = data.id;
    });

    this.custService.viewCustomer(this.custId).subscribe(data => this.customer = data);
  };

  updateCustomer() {
    this.custService.updateCustomer(this.customer).subscribe(data => {
      this.router.navigate(["customers/view-customer/"+data.custId]);
    }),
      error => console.log(error);
  }

}
