import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { TransfersRoutingModule } from './transfers.routing.module';
import { TransfersComponent } from './transfers.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';

@NgModule({
  declarations: [
    TransfersComponent,
    TransferMoneyComponent,
    TransferHistoryComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    NgbModule,
    SharedModule,
    TransfersRoutingModule
    ]
})
export class TransfersModule { }
