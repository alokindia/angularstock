import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { RegsuccessComponent } from './regsuccess/regsuccess.component';
import { CompanyComponent } from './company/company.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'abd',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'home',component:HomeComponent},
  {path:'regsuccess',component:RegsuccessComponent},
  {path:'company',component:CompanyComponent},
  { path: 'widgets', component: WidgetListComponent },
  { path: 'stock/:symbol', component: StockDetailComponent },
  { path: '', redirectTo: '/widgets', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
