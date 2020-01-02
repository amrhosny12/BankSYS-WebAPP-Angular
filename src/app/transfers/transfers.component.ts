import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TransferService } from './transfer.service';
import { AccountService } from '../accounts/account.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private accountService: AccountService, private transferService: TransferService) { }

  ngOnInit() {
    this.subscription = this.accountService.getAccounts().subscribe(
      accounts => {
        this.transferService.setTransferAccounts(accounts);
      },
      error => {
        console.log(error.message);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
