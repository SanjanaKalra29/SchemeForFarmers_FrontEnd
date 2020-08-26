import { LandDetails, Address, User } from './registrationentity';
import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { FarmerregisterService } from '../farmerregister.service';
import { registerFinal } from './registerfinal';
import { Router } from '@angular/router';

@Component({
  selector: 'farmerregistration',
  templateUrl: './farmerregistration.component.html',
  styleUrls: ['./farmerregistration.component.css']
})
export class FarmerregistrationComponent {

  user:User = new User();
  land : LandDetails = new LandDetails();
  address: Address = new Address();

  confirmPassword:string;
  roles:string[] = ['Farmer','Bidder'];

  regfinal: registerFinal = new registerFinal();

  assignRole(roles:String){
    if(roles==this.roles[0]){
      alert("Farmer is Selected");
      this.user.role='Farmer';
    }
    if(roles==this.roles[1]){
    alert("Bidder is Selected");
    this.user.role='Bidder';
    }
    }

  constructor(private service:FarmerregisterService,private router: Router) { }
  process(){

    alert(this.address.addressLine2)
    if(this.confirmPassword!=this.user.password)
    {
      alert("Password Does Not Match")
    }
    else{
      this.registerUser();
  }
  }
 @ViewChild(NgForm)form1: NgForm;
  reset(){
    this.form1.resetForm();
  }

  registerUser(){
    this.regfinal.address=this.address;
    this.regfinal.user=this.user;

    if(this.user.role=='Bidder'){
      alert(JSON.stringify(this.regfinal));
      this.service.userRegister(this.regfinal).subscribe(data=>{

        if(data.Status=="SUCCESS"){
          //route to bidder welcome
          this.router.navigate(['/bidderWelcome']);
          alert("Registeration Successfull")
        }else{
          //registration fail
          alert("Registration Fail")
        }
      })
    }
    else{
      this.regfinal.land=this.land;
      alert(JSON.stringify(this.regfinal));
      this.service.userRegister(this.regfinal).subscribe(data=>{

        if(data.Status=="SUCCESS"){
          //route to farmer welcome
          this.router.navigate(['/app-farmer-welcome2']);
        }else{
          //registration fail
          alert("Registration Fail")
        }
      })
    }
  }
}

