import { Component } from '@angular/core';
import { PokeService } from '../../../../services/poke.service';
import { Subscription } from 'rxjs';
import { TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [TableModule, RouterLink],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {

  pokeObs: Subscription;
  pokemons: IPokemonListe[] = [];

  constructor(private _pokeService: PokeService) {}

  ngOnInit(): void {
    this.pokeObs = this._pokeService.getAllPokemons().subscribe({
      next: (data) => this.pokemons = data,
      error: (err) => console.error(err)
    })
  }

}

interface IPokemonListe {
  id: number,
  name: string,
  image: string
}
