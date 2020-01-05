import { Component, OnInit, Input } from '@angular/core';

import { Bill } from '../../bill.model';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.css']
})
export class BillItemComponent implements OnInit {

  @Input() bill: Bill;

  TYPE_UTILITY = 'utility';
  TYPE_GROCERY = 'grocery';
  TYPE_SHOPPING = 'shopping';
  TYPE_ALLOWANCE = 'allowance';

  constructor() { }

  ngOnInit() {
    console.log(this.bill);
  }

  onEditBill() {

  }

  onDeleteBill() {
    
  }

  getIcon() {
    if ((this.bill.type).toLowerCase() === this.TYPE_UTILITY) {
      return 'glyphicon glyphicon-wrench';
    } else if ((this.bill.type).toLowerCase() === this.TYPE_GROCERY) {
      return 'glyphicon glyphicon-apple';
    } else if ((this.bill.type).toLowerCase() === this.TYPE_SHOPPING) {
      return 'glyphicon glyphicon-shopping-cart';
    } else if ((this.bill.type).toLowerCase() === this.TYPE_ALLOWANCE) {
      return 'glyphicon glyphicon-piggy-bank';
    } else {
      return 'glyphicon glyphicon-list-alt';
    }
  }

}

