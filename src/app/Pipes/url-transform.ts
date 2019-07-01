import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'urlTransform'
})
export class UrlTransformPipe implements PipeTransform {

  transform(value: string, args?: any) {
    if (!value) {
      return null;
    }
    return value.replace(/ /g,'_');
  }

}
