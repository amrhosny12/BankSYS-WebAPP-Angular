import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Account } from '../account.model';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit, OnDestroy {

  accounts: Account[];
  subscription: Subscription;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.subscription = this.onFetchAccounts();

  }

  onFetchAccounts() {
    return this.accountService.fetchAccounts().subscribe(accounts => {
      this.accounts = accounts;
    }, error => {
      console.log(error.message);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
