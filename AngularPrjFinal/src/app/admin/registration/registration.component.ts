import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User  } from "../../model/user";
import { RegistrationService } from './registration.service';
import { NgModel, NgForm } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();
  error = '';

  constructor() { }

  ngOnInit() {
    console.log('REGISTRATION COMPONENT')
  }

//   OnRegister = (myForm: NgForm) => {
//     this.registerService.createUser(this.user).subscribe(
//       (result) => {
//         console.log('Success')
//         if (result ) {
//           this.router.navigate(['/login'])
//         } else {
//           this.error = 'Registration Failed';
//         }
//       },
//     (error) => {
//       console.log('Error');
//     })
//   }  
}
