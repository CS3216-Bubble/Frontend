import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CardView } from "nativescript-cardview";
import { TabView } from "ui/tab-view";
import { SearchBar } from "ui/search-bar";
import platform = require("platform");

// Model ... To be refactored out into a separate model file
class Chat {
    constructor(public id: string, public title: string, public categories: String, public size: number, public limit: number, public timestamp: string) { }
}

// let searchbar = <SearchBar>this.searchBar.nativeElement;

var chatsList = [{ id: "00000001", title: "CS3216 too stressful", categories: ["School", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress"], size: 9, limit: 10, timestamp: "Just now" }, { id: "00000002", title: "Boy A or Boy B?!", categories: ["School", "Stress"], size: 9, limit: 10, timestamp: "Just now" }, { id: "00000003", title: "Why are midterms so hard?", categories: ["School", "Stress"], size: 9, limit: 10, timestamp: "Just now" }, { id: "00000004", title: "Aunty forced me to give up seat on MRT!!!", categories: ["School", "Stress"], size: 9, limit: 10, timestamp: "Just now" }, { id: "00000005", title: "I'm so lost!", categories: ["School", "Stress"], size: 9, limit: 10, timestamp: "Just now" }, { id: "00000006", title: "Should I go for exchange?", categories: ["School", "Stress"], size: 9, limit: 10, timestamp: "Just now" }, { id: "00000007", title: "HALP ME.", categories: ["School", "Stress"], size: 9, limit: 10, timestamp: "Just some very very very very very very long time ago" }];

@Component({
    selector: "list",
    templateUrl: "./components/chatlist/chatlist.template.html",
    styleUrls: ["./styles/common.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChatListComponent {

    public chats: Array<Chat>;

    public showTab = platform.device.os === platform.platformNames.ios;
    public showSearch = false;

    constructor() {
        this.chats = [];

        for (var i = 0; i < chatsList.length; ++i) {
            var chatItem = chatsList[i];
            var categoriesString = "";
            for (var j = 0; j < chatItem.categories.length; ++j) {
                categoriesString += chatItem.categories[j];
                if (j < chatItem.categories.length - 1) {
                    categoriesString += ", ";
                }
            }
            var parsedChat = new Chat(chatItem.id, chatItem.title, categoriesString, chatItem.size, chatItem.limit, chatItem.timestamp);
            this.chats.push(parsedChat);
        }

        // var colorModule = require("color");
        // var borderColor = new colorModule.Color("#0072D2E4");
        // searchbar.dismissSoftInput();
        // searchbar.ios.layer.borderWidth = 1;
        // searchbar.ios.layer.borderColor = borderColor.ios;
    }

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }

    public onToggleSearch($event) {
        this.showSearch = !this.showSearch;
    }

    public onOptions($event) {
        console.log("Options action item tapped.");
    }
}
