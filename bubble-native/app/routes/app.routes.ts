import { LandingComponent } from '../components/landing/landing.component';
import { ChatListComponent } from '../components/chat-list/chat-list.component';
import { ChatRoomComponent } from '../components/chat-room/chat-room.component';
import { CreateRoomComponent } from '../components/create-room/create-room.component';

export const routes = [
    { path: '', component: LandingComponent },
    { path: 'list', component: ChatListComponent },
    { path: 'chat/:roomId', component: ChatRoomComponent },
    { path: 'create-room', component: CreateRoomComponent },
];
