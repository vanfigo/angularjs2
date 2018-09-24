import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  constructor(private chatservice: ChatService) { }

  signIn = (provider: string) => {
    this.chatservice.login(provider);
  }

}
