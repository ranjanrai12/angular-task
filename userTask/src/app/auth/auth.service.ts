import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/catch';
import  {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";


@Injectable()
export class AuthService implements OnInit{
  isadmin;
  isuser;
  token;
  isLoggedin;
  boolean=true; 
  constructor(private http: Http, private router: Router,private afdb: AngularFireDatabase) { 
    this.isadmin = this.afdb.list('/admin').subscribe(data=>{this.isadmin=data
      console.log(this.isadmin)
    })
    this.isuser = this.afdb.list('/users').subscribe(data=>this.isuser=data)
  }
  ngOnInit(){
  }
  signUp(email: string,password: string, isAdmin: string,username:string){
    if(isAdmin){
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(user => {
        console.log(user)
         alert('successfully registered')
         //To store the data to the firebase
         return this.afdb.list('admin').push({email,password,username})
      })
    .catch(
        error => {
        console.log(error)
        alert(error.message)  
      })
    }else{
     firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(user => {  
         alert('successfully registered')
        //To store the data to the firebase
         return this.afdb.list('users').push({email,password,username})
      })
      .catch(
        error => {alert(error.message)}
    )}
  }
  signIn(email:string,password:string)
  {
      for(var i=0;i<this.isadmin.length;i++){
        if(this.isadmin[i].email == email){
         firebase.auth().signInWithEmailAndPassword(email,password)
         .then(
           response=>{
             alert('admin login')
             this.router.navigate(['/admin'])
             firebase.auth().currentUser.getToken()
             .then(
                (token: string) =>this.token = token)
             })
         }  
      }
      for(var j=0;j<this.isuser.length;j++){
        if(this.isuser[j].email == email){
        firebase.auth().signInWithEmailAndPassword(email,password)
       .then(
         user=>{
           alert('user login')
           if(user){
               localStorage.setItem('currentUser',JSON.stringify({email,password}))
             }
           this.router.navigate(['/user'])
           firebase.auth().currentUser.getToken()
              .then(
                (token: string) =>this.token = token)
           }
        )
      }
    }
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch(error =>{
            alert(error.message)
            throw error
          })
  }
     /*this.isLoggedin =true;
     for(var i=0;i<this.isadmin.length;i++)
     {
       if(this.isadmin[i].email == email)
       {
           this.boolean = true;
           firebase.auth().signInWithEmailAndPassword(email,password)
           .then((admin) =>{
              alert('admin login')
              this.router.navigate(['/admin'])
              firebase.auth().currentUser.getToken()
              .then(
                (token: string) =>this.token = token)
            })
          .catch(error =>{
            alert(error.message)
            throw error
          });
        }
      }*/
      /*for(var j=0;j<this.isuser.length;j++){
        if(this.isuser[j].email == email){
          this.boolean = true;
          firebase.auth().signInWithEmailAndPassword(email,password)
           .then((user) =>{
             alert('user login')
             if(user){
               localStorage.setItem('currentUser',JSON.stringify({email,password}))
             }
             this.router.navigate(['/user'])
             firebase.auth().currentUser.getToken()
              .then(
                (token: string) => this.token = token
               )
             return user
           })
          .catch(error =>{
            alert(error.message)
            throw error
          });
        }
     }*/

  
  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/login'])
  }
   createUser(users){
     return this.afdb.list('users').push(users)
   }
   getAdmin(){
      this.afdb.list('/admin'); 
   }
   getUsers(){
     return this.afdb.list('/users') 
   }
   getTasks(){
     return this.afdb.list('/userTasks')
   }
   removeTask($key:string){
    this.afdb.list('/userTasks').remove($key)
   }
   isAuthenticated(){
    return this.token!=null;
   }
}
