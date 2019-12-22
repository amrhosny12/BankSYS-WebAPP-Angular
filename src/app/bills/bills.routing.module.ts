import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsComponent } from '../bills/bills.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BillsComponent,
    canActivate: [AuthGuard],
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillsRoutingModule {}
