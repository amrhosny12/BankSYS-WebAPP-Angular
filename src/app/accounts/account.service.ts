import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.baseUrl;

  splitSection = new Subject<string>();

  constructor(private http: HttpClient) {}

  fetchAccounts() {
    const URL = this.baseUrl + '/customer/accounts';
    return this.http.get<{ [accounts: string]: Account[] }>(URL).pipe(
      map(responseData => {
        let acctArray: Account[] = null;
        acctArray = responseData.accounts;
        return acctArray;
      }),
      catchError(errorRes => {
        return throwError(errorRes);
      })
    );
  }

  fetchAccount(id: string) {
    const URL = this.baseUrl + '/customer/account/' + id;
    return this.http.get<{ [account: string]: Account }>(URL).pipe(
      map(responseData => {
        let account: Account = null;
        account = responseData.account;
        return account;
      }),
      catchError(errorRes => {
        return throwError(errorRes);
      })
    );
  }
}
