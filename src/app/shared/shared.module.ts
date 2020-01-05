import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FourDigitPipe } from './pipes/four-digit.pipe';
import { TransactionTypePipe } from './pipes/transaction-type.pipe';
import { OrdinalDatePipe } from './pipes/ordinal-date.pipe';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    FourDigitPipe,
    TransactionTypePipe,
    OrdinalDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent,
    FourDigitPipe,
    TransactionTypePipe,
    OrdinalDatePipe
  ]
})
export class SharedModule { }
