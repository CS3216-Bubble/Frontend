// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router, NavigationStart, NavigationEnd, RouterModule } from "@angular/router";
import { routes } from "./routes/app.routes";

// components
import { AppComponent } from "./app.component";
import { LandingComponent } from "./components/landing/landing.component";
import { ChatListComponent } from "./components/chat-list/chat-list.component";
import { ChatRoomComponent } from "./components/chat-room/chat-room.component";
import { CreateRoomComponent } from "./components/create-room/create-room.component";

// service
import { ChatService } from "./services/chat.service"

console.log("YAY! HELLO WORLD!");


@NgModule({
    declarations: [AppComponent, LandingComponent, ChatListComponent, ChatRoomComponent, CreateRoomComponent],
    bootstrap: [AppComponent],
    entryComponents: [LandingComponent, ChatListComponent, ChatRoomComponent, CreateRoomComponent],
    imports: [NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    providers: [ChatService]
})
export class AppComponentModule { 
}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);