import { Component, OnInit } from '@angular/core';

import { Bill } from '../bill.model';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.css']
})
export class BillsListComponent implements OnInit {

  bills: Bill[];

  constructor( private billService: BillService ) { }

  ngOnInit() {
    this.bills = this.billService.getBills();
    console.log(this.bills);
  }

}
