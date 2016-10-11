export class Chat {
  roomId: string;
  roomName: string = '';
  userLimit: number;
  roomDescription: string = '';
  categories: string[];
  lastActive: Date;
  messages = [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
