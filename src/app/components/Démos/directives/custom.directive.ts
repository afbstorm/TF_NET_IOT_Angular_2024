import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[changesBackground]',
  standalone: true
})
export class CustomDirective {

  // ElementRef va récupérer un élément natif de la vue (on récupère que sa référence)
  // On va l'utiliser pour manipuler les propriétés du DOM de cet élément

  // Renderer2 est une class abstraite d'angular qui va fournir des méthodes de manipulation d'UI

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // Cycle de vie d'un composant va être découpé en plusieurs étapes. 
  // Le début du cycle de vie (le moment ou le composant est appelé par l'application)
  // Le OnInit est compris par défaut dans tous les composants et directives et services d'angular depuis la v17
  // Tous les autres éléments du cycle de vie doivent être implémentés
  // export class MonComposant implements OnDestroy
  // ngOnInit() {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    )
  }

  // Le début du cycle de vie du composant APRES initialisation de la vue (le moment ou le composant appelé à sa vue chargée)
  // ngOnAfterViewInit() {}

  // Un changement dans le composant 
  // ngOnChanges() {}

  // Retrait du composant, suppression de ses processus pour éviter une consommation inutile
  // ngOnDestroy() {}

  // Un décorateur en typescript DOIT TOUJOURS être accompagné soit d'une class soit d'une fonction (ou méthode) pour fonctionner
  @HostListener('mouseleave') 
  onMouseLeave() {} 

}
