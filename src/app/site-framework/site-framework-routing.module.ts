import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path: 'home' , component: SidebarComponent},
  {path: 'footer' , component: FooterComponent},
  { path: 'contact-us', component: ContactUsComponent}
  // { path: 'employees', loadChildren: () => import('../employees/employees.module').then(m => m.EmployeesModule) },
  // { path: 'customers', loadChildren: () => import('../customers/customers.module').then(m => m.CustomersModule) },
  // { path: 'appointments', loadChildren: () => import('../appointments/appointments.module').then(m => m.AppointmentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SiteFrameworkRoutingModule { }
