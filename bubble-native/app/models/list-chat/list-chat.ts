import { Message } from '../message/message';

export class ListChat {
  roomId: string;
  roomName: string = '';
  roomType: number;
  userLimit: number;
  roomDescription: string = '';
  categories: string[];
  numberOfUsers: number;
  lastActive: Date;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
  
}
