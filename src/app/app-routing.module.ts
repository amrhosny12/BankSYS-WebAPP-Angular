import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailComponent } from './accounts/account-detail/account-detail.component';
import { TransfersComponent } from './transfers/transfers.component';
import { BillsComponent } from './bills/bills.component';
import { DocumentsComponent } from './documents/documents.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
  {
    path: 'login', component: AuthComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    canActivate: [AuthGuard],
    children: [{ path: ':id', component: AccountDetailComponent }]
  },
  {
    path: 'transfers', component: TransfersComponent
  },
  {
    path: 'bills', component: BillsComponent
  },
  {
    path: 'documents', component: DocumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
