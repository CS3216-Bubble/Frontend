import { Component, OnInit, Pipe, PipeTransform, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Chat } from '../models/chat/chat';
import { SocketIO } from "nativescript-socketio";

// import { SocketIOClient } from "socket.io-client/socket.io.js";
// import { SocketIO } from 'nativescript-socket.io';
// declare var zonedCallback: Function;
// var SocketIO = require('nativescript-socket.io');
// var SocketIOClient = require('socket.io-client/socket.io.js');

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

  public socket;

  constructor() {
    var host: string = 'http://localhost:3000';
    this.socket = require('socket.io-client')(host);
    // var SocketIO = require('nativescript-socket.io');
    // var options = {
    //   query: 'token=' + 'SOME_JWT_TOKEN_HERE',
    // };
    // this.socket = require('socket.io-client/socket.io.js')(host);
    // this.socket = new SocketIO(host, options);

    this.socket.connect();

    this.socket.on('connect', function () {
      console.log('connect');
    });

    console.log("SOCKET ID: ", this.socket.instance);
    console.log('service constructed yay!');
    console.log('I ASSIGNED A HOST LIAO.');
    console.log("SOCKET PRINTER", this.socket);
    this.socket.on('list_rooms', function (data) {
      console.log('data', data);
      if (data instanceof Array) {
        for (let chat of data) {
          this.chats.push(new Chat(chat));
        }
      }
    })

    this.socket.on('create_room', function (data) {
      console.log('join room', data);
    })

    this.socket.on('add_message', function (data) {
      console.log('add message', data);
    })

    this.socket.on('bubble_error', function (data) {
      console.log('error', data);
    })

    console.log("FINISHED SETTING CALLBACKS LE");
  }

  addChat(chat: Chat) {
    this.socket.emit('create_room', chat);
  }

  joinChat(roomId: string) {
    this.socket.emit('join_room', {
      roomId,
    });
    this.currentRoom = roomId;
  }

  updateChatById(roomId: string, values: Object = {}): Chat {
    let chat = this.getChatById(roomId);
    if (!chat) {
      return null;
    }
    (<any>Object).assign(chat, values);
    return chat;
  }

  getAllChats(): Chat[] {
    console.log('NOW TRYING TO GET CHATS!');
    this.socket.emit('list_rooms', {}, (wasReceived) => {
      if (wasReceived) {
        console.log('RECEIVVVVEEEDDD');
      }
    });
    console.log('SEE HAVE CHATS NOT...');
    return this.chats;
  }

  getChatById(roomId: string): Chat {
    return this.chats
      .filter(chat => chat.roomId == roomId)
      .pop();
  }

  createMessage(userId: string, message: string) {
    this.socket.emit('add_message', {
      roomId: this.currentRoom,
      message,
    });
  }
}
