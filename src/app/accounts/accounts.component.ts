import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SharedSubjectService } from '../shared/services/shared-subject.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  openSection: boolean;
  splitSection: string;
  isCollapsed: boolean;

  constructor(private sharedSubjectService: SharedSubjectService, private router: Router) { }

  ngOnInit() {
    this.isCollapsed = false;
    this.router.navigate(['accounts']);
    this.sharedSubjectService.splitSection.subscribe(result => {
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
