import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesModule } from '../employees.module';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  employee: Employee = new Employee();
  submitted = false;
  selectedFile: any;

  constructor(private employeesService: EmployeesService,
    private router: Router) { }

  ngOnInit(): void {

  }
  //event handler function : called when the file input changes
  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }

  addEmployee(form) {
    if (form.valid) {
      this.employee.role = "EMPLOYEE";
      this.employeesService.addEmployee(this.selectedFile, this.employee).subscribe(data => {
        alert("Registration Successful ....");
        this.router.navigate(['/admin']);
      },
          error => {
            alert("Error during registration !!! ")
            console.log(error);
          }
      );
     
    } else {
      alert("Some fields are empty or wrong inputs provided");
    }
  }
}
