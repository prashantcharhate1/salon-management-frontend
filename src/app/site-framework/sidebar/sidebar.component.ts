import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/employees/employees.service';
import { Service } from '../service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private employeeService: EmployeesService) { }

  serviceList: Service;

  ngOnInit(): void {
  }

}
