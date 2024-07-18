import { Component } from '@angular/core';
import { ListeComponent } from "./liste/liste.component";

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [ListeComponent],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {

  subtitle: string = 'Exercice du panier de course';

}
