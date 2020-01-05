import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Bill } from './bill.model';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface BillResponseData {
  message: string;
  bill: {
    name: string;
    type: string;
    amount: string;
    dayOfMonth: string;
    description: string;
    _id: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class BillService {
  BASEURL = environment.BASEURL;

  constructor(private http: HttpClient) {}

  getBills() {
    const URL = this.BASEURL + '/bill/posts';
    return this.http.get<{ [bills: string]: Bill[] }>(URL).pipe(
      map(responseData => {
        let billArray: Bill[] = null;
        billArray = responseData.bills;
        return billArray;
      }),
      catchError(errorRes => {
        return throwError(errorRes);
      })
    );
  }

  postBill(bill: Bill) {
    const URL = this.BASEURL + '/bill/post';
    const name = bill.name;
    const type = bill.type;
    const amount = bill.amount;
    const dayOfMonth = bill.dayOfMonth;
    const description = bill.description;
    return this.http
      .post<BillResponseData>(URL, {
        name,
        type,
        description,
        amount,
        dayOfMonth
      })
      .pipe(
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
