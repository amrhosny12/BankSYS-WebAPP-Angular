import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'starDigits'
})
export class FourDigitPipe implements PipeTransform {
    transform(value: any) {
        const starLength: number = value.length - 4;
        const fourDigits = value.substr(starLength, 4);
        let starString = '';
        for (let index = 0; index < starLength; index++ ) {
            starString = starString.concat('*');
        }
        return starString + fourDigits;
    }
}
