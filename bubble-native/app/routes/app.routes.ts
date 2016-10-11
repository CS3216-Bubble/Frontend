import { AppComponent } from "../app.component";
import { LandingComponent } from "../components/landing/landing.component";
import { ChatListComponent } from "../components/chatlist/chatlist.component";

export const routes = [
    { path: '', component: LandingComponent },
    { path: 'list', component: ChatListComponent }
];