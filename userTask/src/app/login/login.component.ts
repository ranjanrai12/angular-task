import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData;
  constructor(private router: Router,private authService: AuthService) { }
  ngOnInit() {
  }
  login(form:NgForm){
  	const email = form.value.email;
  	const password = form.value.password;
  	var test = this.authService.signIn(email,password)
  }
  deleteUser(userkey){
    this.authService.removeTask(userkey)
  }
    
}
