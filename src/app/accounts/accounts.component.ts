import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { SharedSubjectService } from '../shared/services/shared-subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit, OnDestroy {

  openSection: boolean;
  splitSection: string;
  isCollapsed: boolean;
  subscription: Subscription;

  constructor(private sharedSubjectService: SharedSubjectService, private router: Router) { }

  ngOnInit() {
   this.subscription = this.sharedSubjectService.closeModel.subscribe(isClosed => {
      this.isCollapsed = isClosed;
    });
   this.router.navigate(['accounts']);
   this.subscription = this.sharedSubjectService.splitSection.subscribe(result => {
      this.splitSection = result;
    });
  }

  getAccountClass() {
    if (this.splitSection) {
      return 'col-xs-12 col-md-6 col-md-offset-1';
    }
    return 'col-xs-12 col-md-10 col-md-offset-1';
  }

  openAccountModel() {
    this.isCollapsed = !this.isCollapsed;
    this.sharedSubjectService.closeModel.next(this.isCollapsed);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
