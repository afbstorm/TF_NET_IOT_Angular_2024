import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from '../articles/articles.component';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [
    FormsModule,
    ArticlesComponent,
    CardModule,
    FieldsetModule,
    InputNumberModule,
    ButtonModule,
    CurrencyPipe,
    DatePipe,
    InputTextModule
],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {

  listeArticle: IArticle[] = [];

  article: IArticle = {
    id: this.listeArticle.length + 1,
    prix: 0,
    nom: '',
    quantite: 0,
    date: new Date()
  }

  totalPanier: number = 0;

  onSubmit() {
    this.ajoutAuPanier(this.article);
  }

  resetForm() {
    this.article = {
      id: this.listeArticle.length + 1,
      prix: 0,
      nom: '',
      quantite: 0,
      date: new Date()
    }
  }

  // Reduce : 
  // Trois paramètres : Accumulateur, valeur, valeur initiale de l'accumulateur
  // list.reduce(accumulateur, value => accumulateur + value, 0)
  // list = [1,2,3]
  // 0 + 1 --> 1 + 2 --> 3 + 3 --> 6
  total() {

    // listeArticle [
    //   {
    //     id: this.listeArticle.length + 1,
    //   prix: 10,
    //   nom: '',
    //   quantite: 2,
    //   date: new Date()
    //   },
    //   id: this.listeArticle.length + 1,
    //   prix: 5,
    //   nom: '',
    //   quantite: 3,
    //   date: new Date()
    // ]
    // 0 + 20 -> 20 + 15 -> 35

    this.totalPanier = this.listeArticle.reduce((acc, article) => acc + article.prix * article.quantite, 0)
  }

  ajoutAuPanier(article: IArticle) {
    // find 
    // Un paramètre : Ce paramètre va être la valeur de tableau sur laquelle on itère
    // Et va comparer sa valeur à la valeur indiquée 
    // Dans l'exemple ci-dessous on compare le nom de l'item au nom de l'article passé en paramètre de la fonction
    // ajoutAuPanier.
    // SI il y a correspondance, il retourne la PREMIERE OCCURENCE de l'article complet et le stocke dans existingArticle
    // SI il n'y PAS correspondance, il retourne -1 == false == undefined
    const existingArticle = this.listeArticle.find(item => item.nom === article.nom);
    if (existingArticle) {
      if (existingArticle.quantite === 5) {
        return;
      } else {
        existingArticle.quantite = (existingArticle.quantite || 1) + 1;
      }
    } else {
      this.listeArticle.push({...article, quantite: article.quantite})
    }
    this.total();
    this.resetForm();
  }

  suppressionDuPanier(articleId: number) {
    const article = this.listeArticle.find(item => item.id === articleId);
    if (article && article.quantite > 1) {
      article.quantite --;
    } else {
      this.listeArticle = this.listeArticle.filter(item => item.id !== articleId);
    }
    this.total();
  }
}

export interface IArticle {
  id: number,
  prix: number,
  nom: string,
  quantite: number,
  date: Date
};
