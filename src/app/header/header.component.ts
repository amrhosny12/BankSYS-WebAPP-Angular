import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { AccountService } from '../accounts/account.service';
import { SharedSubjectService } from '../shared/services/shared-subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private subscription: Subscription = null;

  constructor(private authService: AuthService, private sharedSubjectService: SharedSubjectService) { }

  ngOnInit() {
    this.subscription = this.authService.userSubject.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  disableDetails() {
    this.sharedSubjectService.splitSection.next(null);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
