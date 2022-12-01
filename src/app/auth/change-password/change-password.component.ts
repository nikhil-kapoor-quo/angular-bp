import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public resetForm: FormGroup;
  public showAlert: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.resetForm = new FormGroup({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
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
