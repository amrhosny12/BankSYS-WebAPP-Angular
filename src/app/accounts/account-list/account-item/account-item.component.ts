import { Component, OnInit, Input } from '@angular/core';

import { Account } from '../../account.model';
import { SharedSubjectService } from '../../../shared/services/shared-subject.service';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.css']
})
export class AccountItemComponent implements OnInit {
  @Input() account: Account;

  id: string;

  constructor(private sharedSubjectService: SharedSubjectService) {}

  ngOnInit() {
    this.id = this.account._id;
  }

  displayDetail() {
    this.sharedSubjectService.splitSection.next('Details');
  }
}
