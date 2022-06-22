import { ErrorHandler } from '@angular/core';

export class CommonErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log(JSON.stringify(error));  
    // call error service here
    // alert(error.stack);
  }
}