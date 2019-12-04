import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsComponent } from '../accounts/accounts.component';
import { AccountDetailComponent } from '../accounts/account-detail/account-detail.component';
import { AccountAddComponent } from './account-add/account-add.component';


const routes: Routes = [
    {
        path: "", component: AccountsComponent, children: [
            {path: ':id', component: AccountDetailComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [AccountAddComponent]
})
export class AccountsRoutingModule { }
