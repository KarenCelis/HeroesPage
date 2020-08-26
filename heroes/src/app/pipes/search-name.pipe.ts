import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {
  
  transform(value: any, arg: any): any {
    const searchbyname = [];

    for (const recorrido of value) {
      if (recorrido.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {

        searchbyname.push(recorrido);

      }

    }
    return searchbyname;
  }
}
