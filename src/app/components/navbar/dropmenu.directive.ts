import { Directive, AfterViewInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[dropMenu]',
  standalone: true
})
export class DropmenuDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // Modification de la visibilité des sous-menus
    this.toggleVisibility('hidden')
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.toggleVisibility('visible')
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.toggleVisibility('hidden')
  }

  private toggleVisibility(display: string) {
    const submenu = this.elementRef.nativeElement.querySelector('ul');
    this.renderer.setStyle(submenu, 'visibility', display)
  }

}
