import { Router } from '@angular/router';

import { Land, Address, Account, Document } from './registrationentity';
import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { FarmerregisterService } from '../farmerregister.service';
import { registerFinal } from './registerfinal';

@Component({
  selector: 'farmerregistration',
  templateUrl: './farmerregistration.component.html',
  styleUrls: ['./farmerregistration.component.css']
})
export class FarmerregistrationComponent {

  register: Register = new Register();
  land : Land = new Land();
  address: Address = new Address();

  regfinal: registerFinal = new registerFinal();

  roles:string[] = ['Farmer','Bidder'];


  

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
    alert("Registeration Successfull")
    if(this.register.role=='Bidder'){

      this.router.navigate(['/app-login']);

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
        }else{
          //registration fail
        }
      })
    }
    else{
      this.regfinal.land=this.land;
      this.service.userRegister(this.regfinal).subscribe(data=>{

        if(data.Status=="SUCCESS"){
          //route to farmer welcome
        }else{
          //registration fail
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
  confirmPassword:string;
  account: Account = new Account();
  document: Document = new Document();
}
