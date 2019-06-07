import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: any, arg): any {
    if(( value == null 
          || value == undefined)
        && ( arg == null 
          || arg == undefined ))
      return;
    
    return value.length > arg ? value.substr(0, arg).concat('...') : value;
  }
}
