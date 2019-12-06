import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { Account } from '../account.model';
import { AccountService } from '../account.service';
import { SharedSubjectService } from 'src/app/shared/services/shared-subject.service';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit, OnDestroy {

  accounts: Account[];
  subscription: Subscription;

  constructor(private accountService: AccountService, private sharedSubjectService: SharedSubjectService) { }

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
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
