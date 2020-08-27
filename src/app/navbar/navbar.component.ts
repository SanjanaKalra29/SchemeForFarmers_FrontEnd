import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user:string;
  constructor() { 
    this.user=(sessionStorage.getItem('UserId')); 
  }
  ngOnInit(): void {
  }

}
