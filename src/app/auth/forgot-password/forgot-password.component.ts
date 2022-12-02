import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotForm: FormGroup;
  public showAlert: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.forgotForm = new FormGroup({
      email: new FormControl('', Validators.required)
    });
  }

  public forgot(): void {
    if(this.forgotForm.valid) {
      this.router.navigate(['auth/change-password']);
    } else {
      this.showAlert = true;
    }
  }

  public goToLogin(): void {
    this.router.navigate(['auth/login']);
  }
}
