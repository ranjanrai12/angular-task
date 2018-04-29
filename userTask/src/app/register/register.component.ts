import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name;username;password;admin;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  signUp(form:NgForm){
      const name =form.value.name;
	   	const email = form.value.email;
	    const password = form.value.password;
      const isAdmin = form.value.admin;
	    this.authService.signUp(email, password, isAdmin,name);
  }
}
