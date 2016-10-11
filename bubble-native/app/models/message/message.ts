export class Message {
  roomId: string;
  userId: string;
  message: string;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}
