
import { Account, Address, Land ,Document} from '../registrationentity';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'farmerregistration',
  templateUrl: './farmerregistration.component.html',
  styleUrls: ['./farmerregistration.component.css']
})
export class FarmerregistrationComponent {
  register: Register = new Register();
  constructor() { }
  process(f : NgForm){
    if(this.register.password === this.register.confirmPassword)
    {
      alert("Password match ")
    }
    else{
      alert("Password Does not match ")
    }
  }
  reset(){
    
  }

}
class Register{
  uname: string;
  contact:number;
  email:string;
  password:string;
  confirmPassword:string;
  address: Address = new Address();
  land: Land = new Land();
  account: Account = new Account();
  document: Document = new Document();
}



