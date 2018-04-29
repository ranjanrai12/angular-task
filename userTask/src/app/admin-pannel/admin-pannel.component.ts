import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AuthService } from '../auth/auth.service';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.css']
})
export class AdminPannelComponent implements OnInit {
  email;task;
  userData;
  givenTask;  	
  constructor(private afdb: AngularFireDatabase,private authService: AuthService, private router: Router) { 
	this.authService.getUsers()
	.subscribe(data=>this.userData=data)
	this.authService.getTasks().subscribe(data=>{
		this.givenTask=data
	})
  }
  ngOnInit() {
  }
  onSave(){
  	this.afdb.list('userTasks').push({email:this.email,task: this.task})
  }
  onDelete($key){
  	this.authService.removeTask($key)
  }
}
