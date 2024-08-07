import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropmenuDirective } from './dropmenu.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, DropmenuDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  links: Link[] = [
    {
      title: 'Démos',
      url: '/demos',
      children: [
        {
          title: 'Bindings',
          url: '/demos/bindings'
        },
        {
          title: 'Pipes',
          url: '/demos/pipes'
        },
        {
          title: 'Directives',
          url: '/demos/directives'
        },
        {
          title: 'Inout',
          url: '/demos/inout'
        },
        {
          title: 'Services',
          url: '/demos/service'
        },
        {
          title: 'Formulaires',
          url: '/demos/formulaire'
        },
        {
          title: 'Http Demo 1',
          url: '/demos/http',
        },
        {
          title: 'Meteo',
          url: '/demos/meteo'
        },
        {
          title: 'Pokedex',
          url: '/demos/pokedex'
        }
      ]
    },
    {
      title: 'Exos',
      url: '/exos',
      children: [
        {
          title: 'Chrono',
          url: '/exos/chrono'
        },
        {
          title: 'Panier',
          url: '/exos/panier'
        },
        {
          title: 'Todo',
          url: '/exos/task'
        },
        {
          title: 'Ajouter un fan',
          url: '/exos/fan/create'
        }
      ]
    }
  ]
}

// class Link {
//   title: string;
//   url?: string;
//   children?: Link[]
//   isActive?: boolean; // Ne sera pas utilisé
// }

interface Link {
  title: string;
  url?: string;
  children?: Link[];
  isActive?: boolean;
}