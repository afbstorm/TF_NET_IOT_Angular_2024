import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private message: string = 'Salut les IOT';

  constructor() { }

  getMessage() {
    return this.message;
  }

  setNewMessage(texte: string) {
    this.message = texte;
  }

  
}
