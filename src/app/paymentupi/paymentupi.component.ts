import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BillingserviceService } from '../service/billingservice.service';

@Component({
  selector: 'app-paymentupi',
  templateUrl: './paymentupi.component.html',
  styleUrls: ['./paymentupi.component.css']
})
export class PaymentupiComponent {
  constructor(private ds: BillingserviceService, private router: Router, private http: HttpClient){}
  private baseUrl = 'http://localhost:1219';
  
  onSubmit() {
    let customer = localStorage.getItem("userData");
  console.log(customer);
  this.http.post(`${this.baseUrl}/sendemail/${customer}`, customer).subscribe(
    (response: any) => {
      console.log('Email sent successfully:', response);
      // You can handle a success message or action here
    },
    (error: any) => {
      console.error('Email sending failed:', error);
      // Handle the error here if needed
    }
  );

}
}