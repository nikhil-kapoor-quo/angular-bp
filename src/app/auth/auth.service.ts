import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpBaseService } from '../core/services/http-base.service';

@Injectable()
export class AuthService implements HttpBaseService {

    login(): Observable<boolean> {
        return of(true)
    }
}