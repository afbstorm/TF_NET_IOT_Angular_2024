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