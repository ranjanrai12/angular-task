import{ NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { UserPannelComponent } from './user-pannel/user-pannel.component';
import { TodoComponent } from './todo/todo.component';

const appRoutes:Routes =[
	{path: 'register', component: RegisterComponent},
	{path: 'login', component: LoginComponent},
	{path: 'admin',component: AdminPannelComponent, canActivate: [AuthGuardService]},
	{path:'todo', component: TodoComponent},
	{path:'user', component: UserPannelComponent, canActivate: [AuthGuardService]} 
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule{

}