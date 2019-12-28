import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Account } from '../../accounts/account.model';
import { Transfer } from '../transfer.model';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit, DoCheck, OnDestroy {

  subscription: Subscription;

  selectFromDef = 0;
  selectToDef = 0;
  selectTypeDef = 0;
  selectFreqDef = 0;

  transfer: Transfer = null;
  accounts: Account[];

  showRecurringFields: boolean;
  selectedFromAcctId: string;
  selectedToAcctId: string;

  constructor(private transferService: TransferService) {}

  ngOnInit() {
    this.showRecurringFields = false;
    this.selectedFromAcctId = '';
    this.selectedToAcctId = '';
  }

  ngDoCheck() {
    this.accounts = this.transferService.getTransferAccounts();
  }
  onSubmit(form: NgForm) {
    const from = form.value.accountData.from;
    const to = form.value.accountData.to;
    const amount = form.value.amount;
    const type = form.value.type;
    if (type === 0) {
      const date = new Date().toISOString();
      this.transfer = {
        from,
        to,
        amount,
        type,
        date
      };
    } else {
      const date = form.value.date;
      const frequency = form.value.frequency;
      const memo = form.value.memo;
      this.transfer = {
        from,
        to,
        amount,
        type,
        date,
        frequency,
        memo
      };
    }
    this.subscription = this.transferService.addTransfer(this.transfer).subscribe(
      resData => {
        console.log(resData);
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
    this.resetForm(form);
  }

  setSelectedFromAccountId(event) {
    const selectedAcctIndex = event.target.options.selectedIndex;
    const selectedAcctId = event.target.options[selectedAcctIndex].id;
    this.selectedFromAcctId = selectedAcctId;
  }

  setSelectedToAccountId(event) {
    const selectedAcctIndex = event.target.options.selectedIndex;
    const selectedAcctId = event.target.options[selectedAcctIndex].id;
    this.selectedToAcctId = selectedAcctId;
  }

  selectType(event) {
    const selectedType = event.target.selectedIndex;
    if (selectedType !== 0) {
      this.showRecurringFields = true;
    } else {
      this.showRecurringFields = false;
    }
  }

  resetForm(form: NgForm) {
    form.reset();
    this.selectFromDef = 0;
    this.selectToDef = 0;
    this.selectTypeDef = 0;
    this.selectFreqDef = 0;
    this.selectedFromAcctId = '';
    this.selectedToAcctId = '';
    this.showRecurringFields = false;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
