import { Component } from '@angular/core';
import { ListeComponent } from './liste/liste.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [ListeComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

}
