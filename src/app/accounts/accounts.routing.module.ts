import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsComponent } from '../accounts/accounts.component';
import { AccountDetailComponent } from '../accounts/account-detail/account-detail.component';
import { AccountAddComponent } from '../accounts/account-add/account-add.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':id', component: AccountDetailComponent },
      { path: 'add', component: AccountAddComponent }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AccountsRoutingModule {}

