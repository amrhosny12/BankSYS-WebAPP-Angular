import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { SharedSubjectService } from 'src/app/shared/services/shared-subject.service';
import { BillService } from '../bill.service';
import { Bill } from '../bill.model';

@Component({
  selector: 'app-bill-add',
  templateUrl: './bill-add.component.html',
  styleUrls: ['./bill-add.component.css']
})
export class BillAddComponent implements OnDestroy {

  subcription: Subscription;

  bill: Bill;

  constructor(private sharedSubjectService: SharedSubjectService, private billService: BillService) { }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const type = form.value.type;
    const amount = form.value.amount;
    const dayOfMonth = form.value.dayOfMonth;
    const description = form.value.description;
    this.bill = {
      name,
      type,
      amount,
      dayOfMonth,
      description
    };
    this.billService.postBill(this.bill).subscribe(resData => {
      this.sharedSubjectService.closeModel.next(false);
    },
    error => {
      console.log(error.message);
    }
    );
    form.reset();
  }

  closeModel(form: NgForm) {
    this.sharedSubjectService.closeModel.next(false);
    form.reset();
  }

  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

}
