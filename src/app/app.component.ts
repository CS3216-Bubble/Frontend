import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Chat } from './models/chat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  chats: Chat[];
  newChat: Chat = new Chat();
  constructor(private chatService: ChatService) {}

  addChat() {
    console.log('add chat');
    this.chatService.addChat(this.newChat);
    this.newChat = new Chat();
  }

  // get chats() {
  //   return this.chatService.getAllChats();
  // }

  ngOnInit() {
    this.chats = this.chatService.getAllChats();
  }
}
