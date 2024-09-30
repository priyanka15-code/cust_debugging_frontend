import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustDashboardComponent } from './cust-dashboard.component';
import { CusrDashboadRoutingModule } from './cusr-dashboad-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CustLayoutComponent } from './cust-layout/cust-layout.component';





@NgModule({
  declarations: [CustDashboardComponent, NavbarComponent, CustLayoutComponent],
  imports: [
    CommonModule,
    CusrDashboadRoutingModule
  ],
})
export class CustDashboardModule { }
