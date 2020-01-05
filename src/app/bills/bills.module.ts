import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { BillsComponent } from '../bills/bills.component';
import { BillsRoutingModule } from './bills.routing.module';
import { SharedModule } from '../shared/shared.module';
import { BillsListComponent } from './bills-list/bills-list.component';
import { BillItemComponent } from './bills-list/bill-item/bill-item.component';
import { BillAddComponent } from './bill-add/bill-add.component';

@NgModule({
  declarations: [
    BillsComponent,
    BillsListComponent,
    BillItemComponent,
    BillAddComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule,
    BillsRoutingModule
    ]
})
export class BillsModule { }
