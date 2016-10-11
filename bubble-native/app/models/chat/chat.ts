import { Message } from "../message/message";

export class Chat {
    constructor(
        public roomId: string, 
        public roomName: string, 
        public roomDescription: string, 
        public categories: string[], 
        public userSize: number, 
        public userLimit: number, 
        public lastActive: Date, 
        public messages: Message[]) { }
}