import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from  '@angular/forms';//ngModel,ngForm
import { ReactiveFormsModule} from  '@angular/forms';//formController
import { AppRoutingModule} from './app-routing/app-routing.module';
import { ModalModule } from 'ngx-modal';

import { Http, HttpModule } from '@angular/http';
import { XHRBackend, RequestOptions} from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { AppSettings,TOKEN_NAME } from './app.setting';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { InterceptedHttp } from './auth/http.interceptor';

//Main App Component
import { AppComponent } from './app.component';

//User App Model
import { RoleComponent } from './admin/role/role.component';
import { NavComponent } from './navigation/nav/nav.component';
import { RegistrationComponent } from './admin/registration/registration.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';

//Services
import { RoleService } from './admin/role/role.service';
import { SearchService } from './itunes/itunes.service';
import { LoginService } from './login/login.service';
import { AuthGaurdService } from './auth/auth.gaurd';
import { UserService} from './users/user.service'
import { UsersComponent } from './users/users.component';
import { MessageService } from './messages/data.service';
import { UserRoleComponent } from './admin/user-role/user-role.component';


export function authHttpServiceFactory(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    tokenName: TOKEN_NAME,
    globalHeaders: [{'Content-Type': 'application/json'}],
    noJwtError: false,
    noTokenScheme: true,
    tokenGetter: (() => AppSettings.token)
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    NavComponent,
    RegistrationComponent,
    AdminHomeComponent,
    LoginComponent,
    UsersComponent,
    UserRoleComponent,
  ],
  imports: [
  // RouterModule.forRoot(routes,{useHash: true}), 
    AppRoutingModule,   
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule ,
    ModalModule 
  ],
  providers: [
    RoleService,
    SearchService,
    LoginService,
    AuthGaurdService,
    UserService,
    MessageService,
    {
      provide: Http,
      useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions) => { 
         return new InterceptedHttp(xhrBackend,requestOptions);
        },
      deps: [XHRBackend, RequestOptions]
    },
    // {
    //   provide: AuthHttp, 
    //   useFactory: authHttpServiceFactory, 
    //   deps: [Http]
    // }
    // ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
