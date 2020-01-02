import { Injectable } from '@angular/core';

import { Bill } from './bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  bills: Bill[] = [
    {
      name: 'Water Bill',
      type: 'utility',
      description: 'Monthly Water Bill',
      amount: '35',
      dayOfMonth: '1'
    },
    {
      name: 'Shopping Bill',
      type: 'shopping',
      description: 'Monthly Shopping Bill',
      amount: '1000',
      dayOfMonth: '20'
    },
    {
      name: 'Grocery Bill',
      type: 'grocery',
      description: 'Monthly Grocery Bill',
      amount: '75',
      dayOfMonth: '20'
    },
    {
      name: 'Allowance',
      type: 'allowance',
      description: 'Monthly Allowance',
      amount: '100',
      dayOfMonth: '20'
    },
    {
      name: 'Other Bills',
      type: 'other',
      description: 'Other Bills',
      amount: '200',
      dayOfMonth: '1'
    }
  ];

  constructor() { }

  getBills() {
      return this.bills;
    }
}

