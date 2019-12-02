import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {throwError, BehaviorSubject} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {User} from './user.model';

export interface AuthResponseData {
  token: string;
  uid: string;
  expiresIn: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  userSubject = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signup(username: string, password: string, email: string, phone: string) {
    const URL = this.baseUrl + '/auth/signup';
    return this.http
      .post<AuthResponseData>(URL, {
        username,
        password,
        email,
        phone
      })
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          console.log(resData);
          this.handleAuthentication(resData.username, resData.uid, resData.token, +resData.expiresIn);
        })
      );
  }

  login(username: string, password: string) {
    const URL = this.baseUrl + '/auth/login';
    return this.http
      .post<AuthResponseData>(URL, {
        username,
        password
      })
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(resData.username, resData.uid, resData.token, +resData.expiresIn);
        })
      );
  }

  autoLogin() {
    const AuthData: {
      username: string;
      uid: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('AuthData'));
    if (!AuthData) {
      return;
    }
    const loadedUser = new User(AuthData.username, AuthData.uid, AuthData._token, new Date(AuthData._tokenExpirationDate));
    if (loadedUser.token) {
      this.userSubject.next(loadedUser);
      const expirationDuration = new Date(AuthData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.userSubject.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('AuthData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(username: string, uid: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(username, uid, token, expirationDate);
    this.userSubject.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('AuthData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes);
    let errorMessage = 'UNKNOWN ERROR OCCURRED';
    if (!errorRes.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.message) {
      case 'INVALID_USERNAME':
        errorMessage = 'USERNAME DOES NOT EXIST';
        break;
      case 'INVALID_PW':
        errorMessage = 'PASSWORD IS NOT CORRECT';
        break;
    }
    return throwError(errorMessage);
  }
}
