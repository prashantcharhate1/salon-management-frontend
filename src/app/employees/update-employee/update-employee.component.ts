import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeId = 0;
  updateForm: FormGroup;
  registerSuccessMessage: string = '';
  isError: boolean;
  employee: Employee = new Employee();

  constructor(private activatedRoute: ActivatedRoute,
    private employeeService: EmployeesService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.employeeId = data.id;
    });

    this.employeeService.viewEmployee(this.employeeId).subscribe(data => this.employee = data);
  };

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.router.navigate(["/employees/view-employee/" + data.empId]);


    }),
      error => console.log(error);
  }
}

