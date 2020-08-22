import { LoginComponent } from './login/login.component';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'app-login', component:LoginComponent},
  {path:'farmerregistration', component: FarmerregistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
