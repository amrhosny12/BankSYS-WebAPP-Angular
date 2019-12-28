import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Account } from '../accounts/account.model';
import { Transfer } from './transfer.model';


export interface TransferResponseData {
  message: string;
  transaction: {
    from: string;
    to: string;
    amount: string;
    type: string;
    date: string;
    frequency: string;
    memo: string;
    transType: string;
    _id: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  BASEURL = environment.BASEURL;

  accounts: Account[];

  constructor(private http: HttpClient) {}

  getTransfers() {
    const URL = this.BASEURL + '/transaction/transfers';
    return this.http.get<{ [transfers: string]: Transfer[] }>(URL).pipe(
      map(responseData => {
        let tranArray: Transfer[] = null;
        tranArray = responseData.transactions;
        const accounts = this.getTransferAccounts();
        return tranArray.map(transfer => {
          let updatedTransfer = transfer;
          for (const account of accounts) {
            let tempTransfer;
            if (transfer.to === account.accountNumber) {
              tempTransfer = {
                ...updatedTransfer,
                toAccountName: account.description
              };
              updatedTransfer = tempTransfer;
            } else if (transfer.from === account.accountNumber) {
              tempTransfer = {
                ...updatedTransfer,
                fromAccountName: account.description
              };
              updatedTransfer = tempTransfer;
            }
          }
          return updatedTransfer;
         });
      }),
      catchError(errorRes => {
        return throwError(errorRes);
      })
    );
  }

  addTransfer(transfer: Transfer) {
    const URL = this.BASEURL + '/transaction/transfer';
    const from = transfer.from;
    const to = transfer.to;
    const amount = transfer.amount;
    const type = transfer.type;
    const date = transfer.date;
    const frequency = transfer.frequency;
    const memo = transfer.memo;
    return this.http
      .post<TransferResponseData>(URL, {
        from,
        to,
        amount,
        type,
        date,
        frequency,
        memo
      })
      .pipe(
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  setTransferAccounts(accounts: Account[]) {
    this.accounts = accounts;
  }

  getTransferAccounts() {
    return this.accounts;
  }
}
