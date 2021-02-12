import { Time } from "@angular/common";
import { Customer } from "../customers/customer";
import { Employee } from "../employees/employee";

export class Appointment{
    appId: number;
    service: any;
    appDate: Date;
    appTime: Time;
    customer: Customer;
    employee: Employee;
}