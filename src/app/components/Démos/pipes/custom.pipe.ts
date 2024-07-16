import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToString',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: number): string {
    const numberMapping = [
      'zero', 'un', 'deux', 'trois', 'quatre', 'cinq',
      'six', 'sept', 'huit', 'neuf', 'dix'
    ];

    return numberMapping[value];
  }

}
