import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IArticle } from '../liste/liste.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  @Input() article: IArticle;

  @Output() ajout: EventEmitter<IArticle> = new EventEmitter<IArticle>();
  @Output() supprime: EventEmitter<number> = new EventEmitter<number>();

  ajoutArticle() {
    this.ajout.emit(this.article);
  }

  suppressionArticle() {
    this.supprime.emit(this.article.id);
  }

}
