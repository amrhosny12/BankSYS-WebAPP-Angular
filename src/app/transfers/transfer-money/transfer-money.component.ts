import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Account } from '../../accounts/account.model';
import { AccountService } from '../../accounts/account.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit, OnDestroy {

  accounts: Account[];
  fromAccountList: Account[];
  toAccountList: Account[];
  subscription: Subscription;

  @ViewChild('fromAccount', {static: true}) fromAccount: ElementRef;
  @ViewChild('toAccount', {static: true}) toAccount: ElementRef;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.subscription = this.accountService.fetchAccounts().subscribe(
      accounts => {
        this.accounts = accounts;
        this.fromAccountList = accounts;
        this.toAccountList = accounts;
      },
      error => {
        console.log(error.message);
      }
    );
  }

  onSubmit(form: NgForm) {}

  setFromAccounts(event) {
    const selectedToAcctIndex = event.target.options.selectedIndex;
    const selectedToAcctId = event.target.options[selectedToAcctIndex].id;

    const tempFromAcctList: Account[] = [];

    for (const acct of this.accounts) {
      if (acct._id !== selectedToAcctId) {
        tempFromAcctList.push(acct);
      }
      this.fromAccountList = tempFromAcctList;
    }
  }

  setToAccounts(event) {
    const selectedToAcctIndex = event.target.options.selectedIndex;
    const selectedToAcctId = event.target.options[selectedToAcctIndex].id;

    const tempToAcctList: Account[] = [];

    for (const acct of this.accounts) {
      if (acct._id !== selectedToAcctId) {
        tempToAcctList.push(acct);
      }
      this.toAccountList = tempToAcctList;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
