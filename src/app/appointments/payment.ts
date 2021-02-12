import { Data } from "@angular/router";
import { Appointment } from "./appointment";

export class Payment{
    paymentAmount:number;
    paymentId:number;
    modeOfPayment:string;
    paymentDate:Date;
    paymentStatus:boolean;
    appId:number;
}