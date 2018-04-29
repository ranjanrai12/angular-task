import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Observable } from 'rxjs'

import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users 	
  constructor(private afdb: AngularFireDatabase) { }

  ngOnInit() {
  	this.users = this.afdb.list('/users')
  	.subscribe(
  		users=>{this.users = users}
  	) 
  }

}
