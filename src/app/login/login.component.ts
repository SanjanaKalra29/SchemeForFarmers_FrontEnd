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
      //console.log(data.userId);
      sessionStorage.setItem('UserId',String(data.userId));
      sessionStorage.setItem('name',String(data.name));
      this.displaymessage=data.message;
      alert(data.role);
      window.location.reload();
      if(data.role=='Bidder'){
      this.router.navigate(['/biddermarketplace']);
       }
    else if(data.role=='Admin'){
      this.router.navigate(['/app-admin']);
       }
       else if(data.role=='Farmer'){
        this.router.navigateByUrl('/navbar', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/app-farmer-welcome2']);
      }); 
       }
       else{
         alert("Not a Valid response");
       }
    }
    else{
      this.displaymessage=data.message;
    }
  })

  
}


}
