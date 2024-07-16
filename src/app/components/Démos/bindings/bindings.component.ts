import { Component } from '@angular/core';
// Importation du FormsModule pour faire fonctionner le ngModel
// Le ngModel est néccessaire pour effectuer un binding two-ways SIMPLE
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  
  subtitle: string = 'Démo du système de binding';
  bindingOneWaySimple: string = 'Je suis appelé et affiché par la vue du composant';

  bindingTwoWaysSimple: string = 'Angular = prise de tête. Mais = FUN';

  disabledAttribute: boolean = false;

  attributeBinding() {
    this.disabledAttribute = true;
  }

  eventBinding() {
    console.log('Je me déclenche au clic du bouton, je suis un événement');
  }


}
