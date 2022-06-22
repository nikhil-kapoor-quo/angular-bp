import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionTokens } from '../constants/session.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem(SessionTokens.AccessToken)) {
      return true;
    } else {
      return false;
    }
  }
}
