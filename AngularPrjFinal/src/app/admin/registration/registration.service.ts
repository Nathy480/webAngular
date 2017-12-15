import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import { AppSettings} from '../../app.setting';
import  {User } from '../../model/user';

import { Observable} from 'rxjs/Observable';

@Injectable()
export class RegistrationService {

  private url:string = AppSettings.getEndPoint();
  
  constructor(private http:Http) {

   }

	 // User.addRegister
  // http://localhost:8445/CroudFunding/user/register

   
   createUser = function(value:User):
     Observable<Response> {
    return this.http.post(this.url+"/user/register/",value);
  }

  }