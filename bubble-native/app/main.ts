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

@NgModule({
    declarations: [AppComponent, LandingComponent, ChatListComponent],
    bootstrap: [AppComponent],
    entryComponents: [LandingComponent, ChatListComponent],
    imports: [NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ]
})
export class AppComponentModule { }

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);