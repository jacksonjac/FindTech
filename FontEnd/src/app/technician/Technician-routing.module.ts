import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicianComponent } from './technician.component';
import { TechnicianLoginComponent } from './technician-login/technician-login.component';
import { TechnicianSignupComponent } from './technician-signup/technician-signup.component';




const routes: Routes = [{
  path:"technician",component:TechnicianComponent,
  children:[
    {path:"",component:TechnicianLoginComponent},
    {path:"login",component:TechnicianLoginComponent},
    {path:"signup",component:TechnicianSignupComponent}
  ]
}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TechnicianRoutingModule { }
