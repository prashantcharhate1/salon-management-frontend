import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [NgbCarouselConfig]
})
export class CustomersComponent implements OnInit {

  toggleOn: boolean = true;
  toggleOn1: boolean = true;

  constructor() {

  }
  ngOnInit(): void {
  }

}
