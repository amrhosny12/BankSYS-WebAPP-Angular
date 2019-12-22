import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BillsComponent } from '../bills/bills.component';
import { BillsRoutingModule } from './bills.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BillsComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    BillsRoutingModule
    ]
})
export class BillsModule { }
