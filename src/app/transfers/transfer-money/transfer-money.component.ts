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

  subscription: Subscription;
  selectFromDef = 0;
  selectToDef = 0;
  selectTypeDef = 0;
  selectFreqDef = 0;
  accounts: Account[];
  showRecurringFields: boolean;
  selectedFromAcctId: string;
  selectedToAcctId: string;


  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.showRecurringFields = false;
    this.selectedFromAcctId = '';
    this.selectedToAcctId = '';
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
    this.subscription.unsubscribe();
  }

}
