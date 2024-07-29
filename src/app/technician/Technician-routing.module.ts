import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicianComponent } from './technician.component';
import { TechnicianLoginComponent } from './technician-login/technician-login.component';
import { TechnicianSignupComponent } from './technician-signup/technician-signup.component';
import { TechnicianOtpComponent } from './technician-otp/technician-otp.component';
import { TechnicianHomepageComponent } from './technician-homepage/technician-homepage.component';
import { TechQuizhomeComponent } from './tech-quizhome/tech-quizhome.component';
import { TechQuizpageComponent } from './tech-quizpage/tech-quizpage.component';

const routes: Routes = [
  {
    path: 'technician',
    component: TechnicianComponent,
    children: [
      { path: '', component: TechnicianLoginComponent},
      { path: 'login', component:TechnicianLoginComponent},
      { path: 'signup', component:TechnicianSignupComponent},
      {path:'otp-page',component:TechnicianOtpComponent},
      {path:'tech-home',component:TechnicianHomepageComponent},
      {path:'quiz-start',component:TechQuizhomeComponent},
      {path:'quiz-page',component:TechQuizpageComponent},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TechnicianRoutingModule { }
