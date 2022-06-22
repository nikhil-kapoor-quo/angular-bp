import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './http.interceptor';
import { CommonErrorHandler } from './services/error.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },
    { provide: ErrorHandler, useClass: CommonErrorHandler }
  ]
})
export class CoreModule { }
