import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SharedSubjectService } from '../../shared/services/shared-subject.service';
import { AccountService } from '../account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnDestroy {
  subscription: Subscription;

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
    const accountDesc = form.value.accountDesc;
    const accountType = form.value.accountType;
    const balance = form.value.balance;
    this.subscription = this.accountService
      .addAccount(
        accountNumber,
        routingNumber,
        accountDesc,
        accountType,
        balance
      )
      .subscribe(
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
