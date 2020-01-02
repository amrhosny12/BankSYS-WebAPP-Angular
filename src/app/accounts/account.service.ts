import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Account } from './account.model';

export interface AccountResponseData {
  message: string;
  account: {
    accountNumber: string;
    routingNumber: string;
    accountType: string;
    description: string;
    balance: string;
    _id: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  BASEURL = environment.BASEURL;

  constructor(private http: HttpClient) {}

  getAccounts() {
    const URL = this.BASEURL + '/customer/accounts';
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

  getAccount(id: string) {
    const URL = this.BASEURL + '/customer/account/' + id;
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

  addAccount(account: Account) {
    const URL = this.BASEURL + '/customer/account';
    const accountNumber = account.accountNumber;
    const routingNumber = account.routingNumber;
    const description = account.description;
    const accountType = account.accountType;
    const balance = account.balance;
    return this.http
      .post<AccountResponseData>(URL, {
        accountNumber,
        routingNumber,
        description,
        accountType,
        balance
      })
      .pipe(
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
