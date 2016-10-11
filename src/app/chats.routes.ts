import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';

export const ChatAppRoutes = [
  { path: '', component: ChatListComponent },
  { path: 'chat/:roomId', component: ChatRoomComponent }
];
