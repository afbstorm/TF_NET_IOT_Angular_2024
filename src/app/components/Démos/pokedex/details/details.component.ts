import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PokeService } from '../../../../services/poke.service';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CardModule, TabViewModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  pokemon: any;

  constructor(private _pokeService: PokeService, private _route: ActivatedRoute) {}

  ngOnInit(): void {

    // Récupération simple d'un params de l'url
    // ------- console.log(this._route.snapshot.params['id']); ------- //


    this._route.params.pipe(
      switchMap(params => {
        const id = params['id']
        return this._pokeService.getPokemonById(id)
      })
    ).subscribe({
      next: ((data) => {
        console.log(data)
        this.pokemon = data
      }),
      error: (err => console.error(err))
    })
    
  }
}
