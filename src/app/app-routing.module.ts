import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { BidderwelcomeComponent } from './bidderwelcome/bidderWelcome.component';

import { CropComponent } from './crop/crop.component';
import { LoginComponent } from './login/login.component';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'app-login', component:LoginComponent},
  {path:'farmerregistration', component: FarmerregistrationComponent},
  {path:'crop', component: CropComponent},
  {path:'bidderWelcome', component: BidderwelcomeComponent},
  {path:'app-about', component: AboutComponent},
  {path:'app-contact-us', component: ContactUsComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
