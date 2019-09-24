import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegsuccessComponent } from './regsuccess/regsuccess.component';
import {HttpClientModule} from '@angular/common/http';
import { CompanyComponent } from './company/company.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { StockService } from './service/stock-service/stock.service';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    RegsuccessComponent,
    CompanyComponent,
    StockDetailComponent,
    WidgetListComponent,
    HttpClientModule,
    HttpClientInMemory
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [StockService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
