import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService,MessageType } from './../../messages/data.service'
import { AppSettings } from './../../app.setting';
import { Role } from './../../auth/auth.gaurd';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  intro:string="Demo App";
  message:string;

  constructor(private router: Router,private messageService: MessageService) {
  
  }

  ngOnInit() {
    this.messageService.currentMessage
                       .subscribe((messageData) => {
                         console.log(messageData);
                         if(messageData.type == MessageType.LOGIN_SUCCESS){
                          this.intro= 'Demo App '+messageData.username;
                          AppSettings.role = Role[messageData.role];

                         }else if(messageData.type == MessageType.LOGOUT_SUCCESS){
                          AppSettings.role = Role.Guest;
                          this.intro= 'Demo App';
                         }
                       });
  }

  isGuest(){    
     if(AppSettings.role == Role.Guest){
        return true;
     }
     return false;
  }

  isAdmin(){
    if(AppSettings.role == Role.Admin){
       console.log('true')
       return true;
    }
    return false;
 }

  
}
