import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { Message } from '@app/models';
import { DialogflowService } from '@app/services';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    if (this.message.content == "") {
      return null;
    } else {
      this.message.timestamp = new Date();
      this.message.author = "user";
      this.messages.push(this.message);

      this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
        this.messages.push(
          new Message(res.result.fulfillment.speech, 'assets/images/bot.png', 'bot', res.timestamp)
        );
      });

      this.message = new Message('', 'assets/images/user.png', 'user');
    }
  }

}