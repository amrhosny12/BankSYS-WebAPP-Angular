import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { SharedSubjectService } from '../../shared/services/shared-subject.service';
import { Account } from '../account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnDestroy {
  subscription: Subscription;
  account: Account = null;

  constructor(
    private sharedSubjectService: SharedSubjectService,
    private accountService: AccountService
  ) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const accountNumber = form.value.accountNumber;
    const routingNumber = form.value.routingNumber;
    const accountType = form.value.accountType;
    const description = form.value.description;
    const balance = form.value.balance;
    this.account = {
      accountNumber,
      routingNumber,
      accountType,
      description,
      balance
    };
    this.subscription = this.accountService.addAccount(this.account).subscribe(
      resData => {
        this.sharedSubjectService.closeModel.next(false);
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
    form.reset();
  }

  closeModel() {
    this.sharedSubjectService.closeModel.next(false);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
