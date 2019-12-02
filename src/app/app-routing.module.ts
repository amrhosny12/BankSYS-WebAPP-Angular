import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailComponent } from './accounts/account-detail/account-detail.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
