import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailid :String;
  password :String;
  constructor() { }

  ngOnInit(): void {
  }
login(){
  alert(this.emailid+" "+ this.password);
}
}
