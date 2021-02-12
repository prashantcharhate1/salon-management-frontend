import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-list-all-employees',
  templateUrl: './list-all-employees.component.html',
  styleUrls: ['./list-all-employees.component.css']
})
export class ListAllEmployeesComponent implements OnInit {

  employeeList: Employee[];

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.GetEmployee();
  }

  DeleteEmployee(employee):void {
    if (confirm("Are you sure you want to delete " + employee.empName + "?")) {
      this.employeeService.deleteEmployee(employee.empId).subscribe(
         data => {
           // refresh the list
           this.GetEmployee();
           return true;
         },
         error => {
           console.error("Error deleting Employee!");
         }
      );
    }
  }

  GetEmployee(): void{
    this.employeeService.getAllEmployees().subscribe(employees => this.employeeList = employees);
    };

}
