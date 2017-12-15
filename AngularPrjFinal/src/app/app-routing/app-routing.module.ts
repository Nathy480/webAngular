import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { AuthGaurdService,Role } from './../auth/auth.gaurd';

import { RoleComponent } from './../admin/role/role.component';
import { RegistrationComponent } from './../admin/registration/registration.component';
import { AdminHomeComponent } from './../admin/admin-home/admin-home.component';
import { LoginComponent } from './../login/login.component';
import { UserRoleComponent } from './../admin/user-role/user-role.component'

// imports 
import {Routes}from '@angular/router';


const routes: Routes = [
  {path: 'home', component: AdminHomeComponent, canActivate:[AuthGaurdService],data:{role:Role.Admin} },
  {path: 'role', component: RoleComponent , canActivate:[AuthGaurdService],data:{role:Role.Admin} },
  {path: 'login', component:LoginComponent,data:{role:Role.Guest}  },  
  {path: 'role/:id/user',component:UserRoleComponent,canActivate:[AuthGaurdService],data:{
                                    role:[
                        Role.Admin,Role.Startup]}
                        
                      },
  {path: 'register', component: RegistrationComponent,data:{role:Role.Guest}  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: LoginComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash: true}),    
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
