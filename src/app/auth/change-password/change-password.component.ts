import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public resetForm: UntypedFormGroup;
  public showAlert: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.resetForm = new UntypedFormGroup({
      password: new UntypedFormControl('', Validators.required),
      confirmPassword: new UntypedFormControl('', Validators.required)
    });
  }

  public reset(): void {
    if(this.resetForm.valid) {
      this.router.navigate(['auth/login']);
    } else {
      this.showAlert = true;
    }
  }

  public goToLogin(): void {
    this.router.navigate(['auth/login']);
  }
}
