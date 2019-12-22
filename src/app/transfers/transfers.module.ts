import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TransfersComponent } from '../transfers/transfers.component';
import { TransferMoneyComponent } from '../transfers/transfer-money/transfer-money.component';
import { TransfersRoutingModule } from './transfers.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TransfersComponent,
    TransferMoneyComponent
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
