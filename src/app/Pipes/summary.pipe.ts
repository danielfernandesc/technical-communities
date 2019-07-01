import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, args?: any) {
    if (!value) {
      return null;
    }
    return value.length > 200 ? value.substr(0, 200) + '...' : value ;
  }

}
