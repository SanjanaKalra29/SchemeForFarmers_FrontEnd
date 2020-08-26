import { CropComponent } from './crop/crop.component';
import { LoginComponent } from './login/login.component';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';
import { BidderwelcomeComponent } from './bidderwelcome/bidderWelcome.component';
import { FarmerWelcome2Component } from './farmer-welcome2/farmer-welcome2.component';
import { ViewsoldhistoryComponent } from './viewsoldhistory/viewsoldhistory.component';
import { ViewmarketplaceComponent } from './viewmarketplace/viewmarketplace.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'app-login', component:LoginComponent},
  {path:'farmerregistration', component: FarmerregistrationComponent},
  {path:'crop', component: CropComponent},
  {path:'bidderwelcome', component:BidderwelcomeComponent},
  {path:'app-farmer-welcome2', component:FarmerWelcome2Component},
  {path:'app-viewsoldhistory', component:ViewsoldhistoryComponent},
  {path:'app-viewmarketplace', component:ViewmarketplaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
