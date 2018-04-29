import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-user-pannel',
  templateUrl: './user-pannel.component.html',
  styleUrls: ['./user-pannel.component.css']
})
export class UserPannelComponent implements OnInit {
  currentUserTask;
  currentUser;
  complteTask;	
  constructor(private afdb: AngularFireDatabase,private router: Router) { 
  	this.afdb.list('/userTasks').subscribe(data=>{
  		this.currentUserTask= data
  		console.log(this.currentUserTask)
  	})
  	this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }

  ngOnInit() {
  }
  getTask(){
  	for(var i=0;i<this.currentUserTask.length;i++){
  		if(this.currentUserTask[i].email == this.currentUser.email){
  			this.complteTask = this.currentUserTask[i].task
  		}
  	}	
  }
}
