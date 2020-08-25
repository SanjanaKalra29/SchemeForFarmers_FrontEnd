import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { login } from './login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login :login = new login();
  displaymessage: String;
  showForm:boolean=false;
  constructor(private service:LoginService,private router: Router) { }

  ngOnInit(): void {
  }
loginuser(){
  this.service.userLogin(this.login).subscribe(data=>{
    alert(JSON.stringify(data));

    if(data.status=="SUCCESS"){
      console.log(data.message);
      console.log(data.userId);
      sessionStorage.setItem('UserId',String(data.userId));
      this.displaymessage=data.message;
    }
    else{
      this.displaymessage=data.message;
    }
  })

  this.router.navigate(['/bidderWelcome']);
}


}
