import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { FourDigitPipe } from '../shared/pipes/four-digit.pipe';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    FourDigitPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent,
    FourDigitPipe
  ]
})
export class SharedModule { }
