import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { RoleService } from '../role/role.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  roles;	
  constructor(private authService: AuthService, private roleService: RoleService) { }

  ngOnInit() {
  	this.roles = this.roleService.getRoles()
  }
  logout(){
  	this.authService.logout();
  }
  
}
