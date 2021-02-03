import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customeDate',
  pure:false 
})
export class CustomeDatePipe extends DatePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return super.transform(value, "EEEE d MMMM y h:mm a");
  // }
  transform(value: any): any {
    // @ts-ignore
    return super.transform(value, moment.localeData().longDateFormat('fullDate'));
    }

}
