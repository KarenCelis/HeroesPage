import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quitRepName'
})
export class QuitRepNamePipe implements PipeTransform {


  transform(value: any): any {


    return value.filter((value,i, arr)=> arr.findIndex(data => data.name === value.name)=== i);
  }

}
