import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/observable';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuardService  {

  constructor(private authService: AuthService,private router: Router,private afAuth: AngularFireAuth) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    	return this.authService.isAuthenticated() 
  }
}

