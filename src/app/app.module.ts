import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { AdminviewpageComponent } from './adminviewpage/adminviewpage.component';
import { CustomerSupportviewpageComponent } from './customer-supportviewpage/customer-supportviewpage.component';
import { PaymentoptionsComponent } from './paymentoptions/paymentoptions.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { OtpComponent } from './otp/otp.component';
import { EmailComponent } from './email/email.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CustomerSupportComponent,
    CustomerComponent,
    AdminComponent,
    PaymentComponent,
    AdminviewpageComponent,
    CustomerSupportviewpageComponent,
    PaymentoptionsComponent,
    OtpComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
