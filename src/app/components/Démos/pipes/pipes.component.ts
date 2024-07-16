import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipe } from './custom.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, CustomPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
 
  subtitle: string = 'Démo du système de pipes';

  stringEnMajuscule: string = 'hello les net iot';
  stringEnMinuscule: string = 'RAPHAEL EST DROLE';

  premierEnMajuscule: string = 'on est chaud, vive angular';

  dateDuJour: Date = new Date();

  argentArgent: number = 42;

}
