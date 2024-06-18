import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent} from './client.component'
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { ClientTechlistComponent } from './client-techlist/client-techlist.component';



const routes: Routes = [{
  path:"",component:ClientComponent,
  children:[
    {path:"",component:ClientHomeComponent},
    {path:"login",component:ClientLoginComponent},
    {path:"signup",component:ClientSignupComponent},
    {path:"techlist",component:ClientTechlistComponent}
    
  ]
}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
