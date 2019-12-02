import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from './account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  openSection: boolean;
  splitSection: string;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.router.navigate(['accounts']);
    this.accountService.splitSection.subscribe(result => {
      this.splitSection = result;
    });
  }

  getAccountClass() {
    if (this.splitSection) {
      return 'col-xs-12 col-md-6 col-md-offset-1';
    }
    return 'col-xs-12 col-md-10 col-md-offset-1';
  }
}
