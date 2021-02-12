import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-list-all-employees-by-service',
  templateUrl: './list-all-employees-by-service.component.html',
  styleUrls: ['./list-all-employees-by-service.component.css']
})
export class ListAllEmployeesByServiceComponent implements OnInit {

  employeeList: any;

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployeesByService().subscribe(data => {
      this.employeeList = data;
    });
  }
}
