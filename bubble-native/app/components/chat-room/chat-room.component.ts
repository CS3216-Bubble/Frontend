import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat/chat';

@Component({
  selector: 'app-chat-room',
  templateUrl: './components/chat-room/chat-room.component.html'
  //, styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  chat: Chat;
  message: string = '';
  constructor(private chatService: ChatService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.chat = this.chatService
      .getChatById(this.route.snapshot.params['roomId']);
    console.log(this.chat);
    this.chatService.joinChat(this.chat.roomId);
    this.chatService.conversationListener.subscribe((payload) => {
      console.log('customer sent message', payload);
      this.chat.messages.push(payload);
    });
  }

  send(): void {
    if (this.chatService.socket && this.chatService.socket.instance.id) {
      this.chatService.createMessage(this.chatService.socket.instance.id, this.message);
      this.chat.messages.push({
        userId: this.chatService.socket.instance.id,
        roomId: this.chatService.socket.instance.roomId,
        message: this.message
      });
      this.message = '';
    }
  }

  // Handle keypress event, for sending chat message
  eventHandler(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
        this.send();
    }
  }

}
