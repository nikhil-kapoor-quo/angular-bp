import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { SessionTokens } from 'src/app/core/constants/session.constant';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: UntypedFormGroup;
  public showAlert: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new UntypedFormGroup({
      username: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required)
    });
  }

  public login(): void {
    if (this.loginForm.value.username && this.loginForm.value.password) {
      this.authService.login().subscribe(() => {
        sessionStorage.setItem(SessionTokens.AccessToken, 'randomTokenValue');
        this.router.navigate(['home']);
      });
    } else {
      this.showAlert = true;
    }
  }

  public goToSignup(): void {
    this.router.navigate(['auth/signup']);
  }

  public goToForgot(): void {
    this.router.navigate(['auth/forgot']);
  }
}
