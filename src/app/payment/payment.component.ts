import { Component } from '@angular/core';
import { BillingserviceService } from '../service/billingservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  private baseUrl='http://localhost:1219';
  responseData: any;
  
  constructor(private ds:BillingserviceService, private router: Router,private http:HttpClient) {
    let customer:any = localStorage.getItem("userData");

  console.log("Working");

  console.log(customer);

  this.http.post(`${this.baseUrl}/paydetailsbill`, customer).subscribe(

    (response: any) => {

      console.log('Login successful:', response);

      this.responseData = response;

}
)
  }
  
 


  
}
