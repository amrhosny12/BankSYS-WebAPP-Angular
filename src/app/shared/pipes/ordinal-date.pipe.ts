import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalDate'
})
export class OrdinalDatePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    if ( +value > 3 && +value < 21 ) {
      return value + 'TH';
    }
    switch (+value % 10) {
      case 1 : return value + 'ST';
      case 2 : return value + 'ND';
      case 3 : return value + 'RD';
    }
  }

}
