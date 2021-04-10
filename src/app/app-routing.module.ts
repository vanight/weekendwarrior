import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { ToolsDashboardComponent } from './tools-dashboard/tools-dashboard.component';
import { ToolsTableComponent } from './tools-table/tools-table.component';

const routes: Routes = [
  { path: '', component: ToolsDashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'item', component: ToolsDashboardComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
