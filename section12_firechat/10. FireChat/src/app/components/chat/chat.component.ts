import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  message: string;
  element: any;

  constructor(public chatService: ChatService) {
    this.chatService.loadMessages().subscribe(() => {
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 20);
    });
  }

  ngOnInit(): void {
    this.element = document.getElementById('app-messages');
  }

  sendMessage = () => {
    if(this.message.length > 0) {
      this.chatService.addMessage(this.message)
        .then(() => {
          console.log('message sent');
          this.message = '';
        })
        .catch((err) => {
          console.error('error', err);
        });
    }
  }

}
