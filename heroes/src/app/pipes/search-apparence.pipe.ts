import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchApparence'
})
export class SearchApparencePipe implements PipeTransform {


  transform(value1: any, arg1: any): any {
    const buscarporapariencia = [];

    for (const recorrido of value1) {
      if (recorrido.biography.alignment.toLowerCase().indexOf(arg1.toLowerCase()) > -1) {

        buscarporapariencia.push(recorrido);

      }

    }
    return buscarporapariencia;
  }
}
