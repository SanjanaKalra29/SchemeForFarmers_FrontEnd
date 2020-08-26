import { Land, Address} from './registrationentity';
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

  register: Register = new Register();
  land : Land = new Land();
  address: Address = new Address();

  confirmPassword:string;
  roles:string[] = ['Farmer','Bidder'];

  regfinal: registerFinal = new registerFinal();

  assignRole(roles:String){
    if(roles==this.roles[0]){
      alert("Farmer is Selected");
      this.register.role='Farmer';
    }
    if(roles==this.roles[1]){
    alert("Bidder is Selected");
    this.register.role='Bidder';
    }
    }

  constructor(private service:FarmerregisterService,private router: Router) { }
  process(){
    if(this.confirmPassword!=this.register.password)
    {
      alert("Password Does Not Match")
    }
    else{
    alert("Registeration Successfull")
    if(this.register.role=='Bidder'){

      this.router.navigate(['/app-login']);

    }
  }
  }

  @ViewChild(NgForm) form1: NgForm;
  reset(){
    this.form1.resetForm();
  }

  registerUser(){
    this.regfinal.address=this.address;
    this.regfinal.register=this.register;
    if(this.register.role=='Bidder'){
      this.service.userRegister(this.regfinal).subscribe(data=>{

        if(data.Status=="SUCCESS"){
          //route to bidder welcome
          this.router.navigate(['/bidderWelcome']);
        }else{
          //registration fail
          alert("Registration Fail")
        }
      })
    }
    else{
      this.regfinal.land=this.land;
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
export class Register{
  fullname: string;
  phoneno:number;
  role:String;
  email:string;
  password:string;
  accountNumber:number;
  ifscCode:string;
  Aadharcard:number;
  pancard:string;
  addharfile: File;
  panfile:File;
}