import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeesModule } from '../employees/employees.module';
import { CustomersModule } from '../customers/customers.module';
import { SiteFrameworkRoutingModule } from './site-framework-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent,ContactUsComponent],
  imports: [
    CommonModule,
    EmployeesModule,
    // CustomersModule,
    SiteFrameworkRoutingModule

  ],
  exports: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class SiteFrameworkModule { }
