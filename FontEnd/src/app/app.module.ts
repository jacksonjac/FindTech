import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ToastModule} from 'primeng/toast';
import {ButtonModule}from 'primeng/button'
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';


import { RippleModule } from 'primeng/ripple';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module'; // Make sure this path is correct
import { AdminRoutingModule } from './admin/admin-routing.module'; // Make sure this path is correct
import { ClientRoutingModule } from './client/client-routing.module'; // Make sure this path is correct

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ClientComponent } from './client/client.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { ClientLoginComponent } from './client/client-login/client-login.component';
import { ClientSignupComponent } from './client/client-signup/client-signup.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { TechnicianComponent } from './technician/technician.component';
import { TechnicianLoginComponent } from './technician/technician-login/technician-login.component';
import { TechnicianHomepageComponent } from './technician/technician-homepage/technician-homepage.component';
import { TechnicianSignupComponent } from './technician/technician-signup/technician-signup.component';
import { TechnicianRoutingModule } from './technician/Technician-routing.module';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { TechnicianlistComponent } from './admin/technicianlist/technicianlist.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ClientTechlistComponent } from './client/client-techlist/client-techlist.component';
import { ClientOtpComponent } from './client/client-otp/client-otp.component';
import { ModalComponent } from './client/modal/modal.component';
import { AuthInterceptor } from './client/interceptor/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHomeComponent,
    ClientComponent,
    ClientHomeComponent,
    ClientLoginComponent,
    ClientSignupComponent,
    AdminLoginComponent,
    TechnicianComponent,
    TechnicianLoginComponent,
    TechnicianHomepageComponent,
    TechnicianSignupComponent,
    UserlistComponent,
    TechnicianlistComponent,
    ClientTechlistComponent,
    ClientOtpComponent,
    ModalComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClientRoutingModule,
    AdminRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatOptionModule,
    MatCardModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TechnicianRoutingModule,
    HttpClientModule,
    ButtonModule,
    ToastModule,
    RippleModule
   
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
