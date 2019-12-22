import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  subscription: Subscription;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.subscription = this.accountService.fetchAccounts().subscribe(
      accounts => {
        this.accounts = accounts;
      },
      error => {
        console.log(error.message);
      }
    );
  }

  onSubmit(form: NgForm) {}

  isNotSelectedFrom(form: NgForm, account: Account) {
    console.log(form);
    console.log(account);
    return true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
