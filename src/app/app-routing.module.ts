import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { AdminComponent } from './admin/admin.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminviewpageComponent } from './adminviewpage/adminviewpage.component';
import { CustomerSupportviewpageComponent } from './customer-supportviewpage/customer-supportviewpage.component';
import { PaymentoptionsComponent } from './paymentoptions/paymentoptions.component';
import { OtpComponent } from './otp/otp.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
                    {
                        path:'',
                        component:HomeComponent
                    },
                      {path:'about',
                      component:AboutComponent},
                      {path:'admin',
                      component:AdminComponent},
                      {path:'Customer',
                      component:CustomerComponent},
                      {path:'CustomerSupport',
                      component:CustomerSupportComponent},
                      {path:'payment',
                      component:PaymentComponent},
                      {path:'adminviewpage',
                      component:AdminviewpageComponent},
                      {path:'CustomerSupportviewpage',
                      component:CustomerSupportviewpageComponent},
                      {
                        path:'paymentoptions',
                        component:PaymentoptionsComponent
                      },
                      {
                        path:'otp',
                        component:OtpComponent
                      },
                      {
                        path:'email',
                        component:EmailComponent
                      },
                       
                    



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
