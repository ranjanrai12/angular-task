import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomeComponent } from './home/home.component';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { RoleService } from './role/role.service';
import { TodoComponent } from './todo/todo.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { UserPannelComponent } from './user-pannel/user-pannel.component';

const firebaseConfig ={
    apiKey: "************************",
    authDomain: "********************",
    databaseURL: "*************************",
    projectId: "*********************",
    storageBucket: "**********************",
    messagingSenderId: "****************"
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    TodoComponent,
    AdminPannelComponent,
    UserPannelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ HttpModule,AngularFireAuth,AuthService, AuthGuardService,
  AngularFireDatabase,RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
