import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

@Injectable()
export class RoleService {

  constructor(private afdb: AngularFireDatabase) { }
  
  getRoles(){
  	return this.afdb.list('roles')
  }

}
