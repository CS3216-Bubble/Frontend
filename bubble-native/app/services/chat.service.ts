import { Component, OnInit, Pipe, PipeTransform, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Chat } from '../models/chat/chat';
// import { SocketIO } from "nativescript-socketio";
declare var zonedCallback: Function;

@Injectable()
export class ChatService {
  // Placeholder for last id 
  // to simulate auto increment of id
  lastId: number = 0;
  // Placeholder for chats
  chats: Chat[] = [];
  currentRoom: string = '';
  currentConversation: string[];

  conversationListener = null;

  private host: string = 'http://localhost:3000';
  // public socket: SocketIO;
  
//   constructor() {
//     this.socket = new SocketIO(this.host);
//     this.socket.on('list_rooms', function (data) {
//       if (data instanceof Array) {
//         for (let chat of data) {
//           this.chats.push(new Chat(chat));
//         }
//       }
//     })

//     this.socket.on('create_room', function (data) {
//       console.log('join room', data);
//     })

//     this.socket.on('add_message', function (data) {
//       console.log('add message', data);
//     })

//     this.socket.on('bubble_error', function (data) {
//       console.log('error', data);
//     })
//   }

//   addChat(chat: Chat) {
//     this.socket.emit('create_room', chat);
//   }

//   joinChat(roomId: string) {
//     this.socket.emit('join_room', {
//       roomId,
//     });
//     this.currentRoom = roomId;
//   }

//   updateChatById(roomId: string, values: Object = {}): Chat {
//     let chat = this.getChatById(roomId);
//     if (!chat) {
//       return null;
//     }
//     (<any>Object).assign(chat, values);
//     return chat;
//   }

//   getAllChats(): Chat[] {
//     this.socket.emit('list_rooms');
//     return this.chats;
//   }

//   getChatById(roomId: string): Chat {
//     return this.chats
//       .filter(chat => chat.roomId == roomId)
//       .pop();
//   }

//   createMessage(userId: string, message: string) {
//     this.socket.emit('add_message', {
//       roomId: this.currentRoom,
//       message,
//     });
//   }
}
