import { AppComponent } from "../app.component";
import { LandingComponent } from "../components/landing/landing.component";
import { ChatListComponent } from "../components/chat-list/chat-list.component";

export const routes = [
    { path: '', component: LandingComponent },
    { path: 'list', component: ChatListComponent }
];