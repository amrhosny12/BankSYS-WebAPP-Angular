import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {map, switchMap, exhaustMap} from 'rxjs/operators';

import {Account} from '../account.model';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit, OnDestroy {
  account: Account = {
    accountNumber: '',
    routingNumber: '',
    accountType: '',
    description: '',
    balance: ''
  };
  id: string;
  subscription: Subscription;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.accountService.splitSection.next('Details');
    this.subscription = this.route.params
    .pipe(
      map((params: Params) => {
        this.id = params.id;
        }),
        exhaustMap(() => {
          return this.accountService.fetchAccount(this.id);
        })
        )
        .subscribe(
          account => {
            this.account = account;
        },
        error => {
          console.log(error.message);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
