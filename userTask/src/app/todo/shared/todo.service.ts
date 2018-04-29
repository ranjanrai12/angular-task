import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireList } from "angularfire2/database"
@Injectable()
export class TodoService {
  toDoList/*: AngularFireList<any>*/	
  constructor(private afdb: AngularFireDatabase) { }
  
  getTodoList(){
  	//To retrive the data from the data based
  	return this.afdb.list('/title');
  }

  addTitle(title:string){
  //is checked property role is to check the job is completed or not
  //	this.toDoList.push({title: title,ischecked:false})
     this.afdb.list('/title').push({title: title,ischecked:false})
  }

  checkoronchecktitle($key:string,flag:boolean){
   this.afdb.list('/title').update($key, {ischecked: flag})

  }

  removeTitle($key:string){
    this.afdb.list('title').remove($key)
  }


}
