import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TabView } from "ui/tab-view";
import { SearchBar } from "ui/search-bar";
import { Chat } from "../../models/chat/chat";
import platform = require("platform");

// let searchbar = <SearchBar>this.searchBar.nativeElement;

class ChatListModel {
    constructor(public roomId: string, public roomName: string, public roomDescription: string, public categories: string, public userSize: number, public userLimit: number, public lastActive: string) {}
}

var moment = require('moment');

var chatsList = [
    {   roomId: "00000001",
        roomName: "CS3216 too stressful", 
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress"],
        userSize: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago",
        messages:[] },
    {   roomId: "00000002", 
        roomName: "CS3216 too stressful", 
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress"], 
        userSize: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago", 
        messages:[] }
        ,
    {   roomId: "00000002", 
        roomName: "CS3216 too stressful", 
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress"], 
        userSize: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago", 
        messages:[] },
    {   roomId: "00000002", 
        roomName: "CS3216 too stressful", 
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress"], 
        userSize: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago", 
        messages:[] },
    {   roomId: "00000002", 
        roomName: "CS3216 too stressful", 
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress"], 
        userSize: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago", 
        messages:[] },
    {   roomId: "00000002", 
        roomName: "CS3216 too stressful", 
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress"], 
        userSize: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago", 
        messages:[] },
    {   roomId: "00000002", 
        roomName: "CS3216 too stressful", 
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress", "Stress"], 
        userSize: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago", 
        messages:[] }
        ];

@Component({
    selector: "list",
    templateUrl: "./components/chat-list/chat-list.template.html",
    styleUrls: ["./styles/common.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChatListComponent {

    public chats: Array<ChatListModel>;

    public showTab = platform.device.os === platform.platformNames.ios;
    public showSearch = false;
    public selectedIndex = 1;

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
            var parsedChat = new ChatListModel(chatItem.roomId, chatItem.roomName, chatItem.roomDescription, categoriesString, chatItem.userSize, chatItem.userLimit, chatItem.lastActive.toString());

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
