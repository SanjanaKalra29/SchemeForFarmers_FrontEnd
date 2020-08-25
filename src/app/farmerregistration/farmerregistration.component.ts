import { Router } from '@angular/router';
import { RegisterService } from './../register.service';

import { Land, Address, Account, Document } from './registrationentity';
import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'farmerregistration',
  templateUrl: './farmerregistration.component.html',
  styleUrls: ['./farmerregistration.component.css']
})
export class FarmerregistrationComponent {

  register: Register = new Register();
  land : Land = new Land();
  addres: Address = new Address();

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

  constructor(private service:RegisterService,private router: Router) { }
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
    if(this.register.role=='Farmer'){
    this.service.userFarmer(this.register,this.addres,this.land).subscribe(data=>{
      alert(JSON.stringify(data));
    }
    )}
    else{
      this.service.userBidder(this.register,this.addres).subscribe(data=>{
        alert(JSON.stringify(data));
      }
      )
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
