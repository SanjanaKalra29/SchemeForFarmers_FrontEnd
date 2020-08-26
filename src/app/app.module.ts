import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';
import { CropComponent } from './crop/crop.component';
import { BidderwelcomeComponent } from './bidderwelcome/bidderWelcome.component';
import { FarmerWelcome2Component } from './farmer-welcome2/farmer-welcome2.component';
import { ViewsoldhistoryComponent } from './viewsoldhistory/viewsoldhistory.component';
import { ViewmarketplaceComponent } from './viewmarketplace/viewmarketplace.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    FarmerregistrationComponent,
    CropComponent,
    BidderwelcomeComponent,
    FarmerWelcome2Component,
    ViewsoldhistoryComponent,
    ViewmarketplaceComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
