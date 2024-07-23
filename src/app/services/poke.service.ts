import { Injectable } from '@angular/core';
import { forkJoin, map, switchMap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  // Url de BASE
  // Ajout de queryParams (?limit; offset)
  // Ajout d'id : ...pokemon/6
  private url: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private _http: HttpClient) { }

  // Première méthode (requête http) va servir à récupérer la liste des 151 premiers pokémons
  getAllPokemons(): Observable<any> {
    // return this._http.get(`${this.url}?limit=151`);

    // La méthode pipe permet d'avoir accès à un grand nombre de méthodes de manipulation d'observable
    return this._http.get(`${this.url}?limit=151`).pipe(
      // response = tableau des 151 résultats (ou plus, ou moins dépendant du queryParam limit)
      switchMap((response: any) => {
        // Création d'un nouveau tableau d'observable sur les détails des pokémons
        const detailsRequests = response.results.map((pokemon: any) => {
          // On utilise l'url des pokémons pour fetch les détails
          return this._http.get(pokemon.url)
        });

        // Utilisation du forkJoin pour attendre que TOUTES les requêtes HTTP soient terminées
        return forkJoin(detailsRequests)
      }),
      map((details: any) => {
        // Transformer le tableau de détails pour créer un nouvel objets avec les propriétés désirées
        return details.map((infos: any) => ({
          id: infos.id,
          name: infos.name,
          image: infos.sprites.front_default
        }))
      })
    )
  }
  
  getPokemonById(id: number): Observable<any> {
    return this._http.get(`${this.url}/${id}`)
  }
}
