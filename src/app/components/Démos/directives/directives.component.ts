import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CustomDirective } from './custom.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf, NgFor, CustomDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  showIfTrueNgIf: boolean = false; // Utilisée sur la directive *ngIf=""
  showIfTrueIf: boolean = false; // Utilisée sur la diretive @if() {}

  arrayOfThings: string[] = ['Pax Dei', 'Pokémon', 'Superman', 'Mentalist', 'Football', 'Tusla King'];
  arrayOfThings2: string[] = [];

  showAndHideInvisibleThings() {
    this.showIfTrueNgIf = !this.showIfTrueNgIf;
  }

  showAndHideInvisibleThings2() {
    this.showIfTrueIf = !this.showIfTrueIf;
  }
}
