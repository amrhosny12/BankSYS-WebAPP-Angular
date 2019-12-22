import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransfersComponent } from '../transfers/transfers.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TransfersComponent,
    canActivate: [AuthGuard],
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfersRoutingModule {}
