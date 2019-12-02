import { Component, OnInit, Input } from '@angular/core';

import { Account } from '../../account.model';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.css']
})
export class AccountItemComponent implements OnInit {

  @Input() account: Account;

  id: string;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.id = this.account._id;
  }

  displayDetail() {
    this.accountService.splitSection.next('Details');
  }

}
