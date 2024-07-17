import { Component } from '@angular/core';
import { EnfantComponent } from '../enfant/enfant.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [EnfantComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  number1: number = 0;
  number2: number = 0;
  result: number = 0;


  resultFetching(event: number) {
    this.result = event;
  }
}
