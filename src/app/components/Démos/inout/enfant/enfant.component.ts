import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent implements OnChanges {

  // Input sert à récupérer une information
  // Output sert à envoyer un EVENEMENT qui va contenir une information

  @Input() num1: number;
  @Input() num2: number;

  // EventEmitter sert à envoyé un événement contenant l'information destinée au composant parent
  // Il prend un TYPE entre <> et ce type DOIT être du même type que l'informée envoyée
  @Output() calcul: EventEmitter<number> = new EventEmitter<number>();

  // ngOnChanges est appelé lorsque les valeurs du composant changent. 
  // On peut dire à la méthode de n'écouter que certaines valeurs
  ngOnChanges(changes: SimpleChanges): void {
    if ('num1' in changes || 'num2' in changes) {
      // Appel d'une méthode de calcul
      this.calculResult();
    }
  }

  calculResult() {
    const result = this.num1 + this.num2;
    // emit = la méthode d'envoi de l'événement et sa valeur au parent via notre EventEmitter
    this.calcul.emit(result)
  }
}
