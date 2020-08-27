import { NotificationService } from './../notification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  id:number;
  constructor(private service:NotificationService,private router: Router) { }
  ngOnInit(): void {
  }

getNotice(){
  this.id=Number(sessionStorage.getItem('UserId')); 
  this.service.getNotification(this.id).subscribe(data=>{
    alert(JSON.stringify(data));
   })

  }
}

