import { Component } from '@angular/core';
import { Message } from '@app/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message : Message;
  public messages : Message[];


  constructor(){
    this.message = new Message('', 'assets/images/user.png', 'user');
    this.messages = [
      new Message('Welcome to Angular chatbot. You can ask me evrything about Angular.', 'assets/images/bot.png', 'bot', new Date())
    ];
  }
}