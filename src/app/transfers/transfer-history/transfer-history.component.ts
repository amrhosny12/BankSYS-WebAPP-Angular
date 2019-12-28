import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TransferService } from '../transfer.service';
import { Transfer } from '../transfer.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  transfers: Transfer[] = [];

  constructor(private transferService: TransferService) {}

  ngOnInit() {
    this.subscription = this.transferService.getTransfers().subscribe(
      transfers => {
        this.transfers = transfers;
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
