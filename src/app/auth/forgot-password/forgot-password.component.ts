import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotForm: UntypedFormGroup;
  public showAlert: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.forgotForm = new UntypedFormGroup({
      email: new UntypedFormControl('', Validators.required)
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
