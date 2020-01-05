import { Component, OnInit, OnDestroy } from '@angular/core';

import { SharedSubjectService } from '../shared/services/shared-subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  isCollapsed = false;

  constructor(private sharedSubjectService: SharedSubjectService) { }

  ngOnInit() {
    this.subscription = this.sharedSubjectService.closeModel.subscribe(isClosed => {
      this.isCollapsed = isClosed;
    });
  }

  openBillForm() {
    this.isCollapsed = true;
    this.sharedSubjectService.closeModel.next(this.isCollapsed);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
