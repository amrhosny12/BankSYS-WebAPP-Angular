import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Transfer } from './transfer.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

  constructor(private http: HttpClient) {}

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
      .pipe(catchError(errorRes => {
        return throwError(errorRes);
      })
    );
  }
}
