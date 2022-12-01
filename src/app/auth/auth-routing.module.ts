import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(authRoutes)],
  declarations: [LoginComponent, SignupComponent, ForgotPasswordComponent, ChangePasswordComponent],
  providers:[AuthService],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
