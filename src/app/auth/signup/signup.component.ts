import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: UntypedFormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.signupForm = new UntypedFormGroup({
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', Validators.email),
      phone: new UntypedFormControl('', Validators.required),
      dob: new UntypedFormControl('')
    });
  }

  public resetForm(): void {
    this.signupForm.reset();
    this.router.navigate(['auth/login']);
  }

  public signup(): void {
    console.log(this.signupForm.value);
    this.router.navigate(['auth/login']);
  }
}
