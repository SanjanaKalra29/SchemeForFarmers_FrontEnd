import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user:string;
  constructor(private router: Router) { 

  }
  ngOnInit(): void {
    this.user=sessionStorage.getItem('UserId'); 
    alert(this.user);
  }
Logout() {
   
    sessionStorage.removeItem('UserId');
    this.router.navigate(['']);
    window.location.reload();
  }

}
