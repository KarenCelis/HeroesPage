import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderName'
})
export class OrderNamePipe implements PipeTransform {

  
  transform(value1: any): any {


    return value1.sort((a, b) => {
      if (a.name < b.name) {
        return -1;

      }
      if (a.name> b.name) {
        return 1;
      }
      return 0;

    });
  }
}
