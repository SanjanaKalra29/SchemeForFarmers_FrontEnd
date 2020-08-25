import { RegisterService } from './../register.service';

import { Account,Land, Address,Document} from './registrationentity';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

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

  constructor(private service:RegisterService) { }
  process(){
    alert(this.register.firstname);
    alert(this.land.address);
    alert(this.register.role);
    alert(this.addres.state);
    this.register.id=50;
    
  }

  @ViewChild(NgForm) form1: NgForm;
  reset(){
    this.form1.resetForm();
  }
  registerUser(){
    this.service.userRegister(this.register).subscribe(data=>{
      alert(JSON.stringify(data));
    }
    )}
}
export class Register{
  firstname: string;
  lastname: string;
  phoneno:number;
  role:String;
  email:string;
  password:string;
  confirmPassword:string;
  account: Account = new Account();
  document: Document = new Document();
}



