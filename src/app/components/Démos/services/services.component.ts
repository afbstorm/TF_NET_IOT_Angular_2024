import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [InputTextModule, FormsModule, ButtonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  message: string;
  newMessage: string;

  constructor(private _messageService: MessageService) {}

  ngOnInit() {
    this.message = this._messageService.getMessage();
  }

  sendMessage() {
    this._messageService.setNewMessage(this.newMessage);
    this.message = this._messageService.getMessage();
  }



}
