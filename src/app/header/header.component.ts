import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { AccountService } from '../accounts/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService, private accountService: AccountService) { }

  ngOnInit() {
    this.userSub = this.authService.userSubject.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  disableDetails() {
    this.accountService.splitSection.next(null);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
