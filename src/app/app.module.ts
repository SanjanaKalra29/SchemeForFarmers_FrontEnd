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
import { HttpClientModule } from '@angular/common/http';
import { BiddermarketplaceComponent } from './biddermarketplace/biddermarketplace.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    FarmerregistrationComponent,
    CropComponent,
    BiddermarketplaceComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
