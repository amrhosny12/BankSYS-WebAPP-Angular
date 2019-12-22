import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccountsComponent } from '../accounts/accounts.component';
import { AccountListComponent } from '../accounts/account-list/account-list.component';
import { AccountItemComponent } from '../accounts/account-list/account-item/account-item.component';
import { AccountDetailComponent } from '../accounts/account-detail/account-detail.component';
import { AccountAddComponent } from '../accounts/account-add/account-add.component';
import { AccountsRoutingModule } from './accounts.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AccountsComponent,
    AccountListComponent,
    AccountItemComponent,
    AccountDetailComponent,
    AccountAddComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    NgbModule,
    SharedModule,
    AccountsRoutingModule
    ]
})
export class AccountsModule { }
