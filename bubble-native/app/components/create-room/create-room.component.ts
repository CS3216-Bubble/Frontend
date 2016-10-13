import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat/chat';

@Component({
  selector: 'app-create-room',
  templateUrl: './components/create-room/create-room.component.html'
  // , styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  newChat: Chat = new Chat();
  constructor(private chatService: ChatService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  addChat() {
    this.chatService.addChat(this.newChat);
    this.newChat = new Chat();
  }

}
