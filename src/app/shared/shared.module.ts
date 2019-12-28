import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FourDigitPipe } from './pipes/four-digit.pipe';
import { TransactionType } from './pipes/transaction-type.pipe';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    FourDigitPipe,
    TransactionType
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent,
    FourDigitPipe,
    TransactionType
  ]
})
export class SharedModule { }
