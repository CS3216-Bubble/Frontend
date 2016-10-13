import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TabView } from "ui/tab-view";
import { SearchBar } from "ui/search-bar";
import { ListChat } from "../../models/list-chat/list-chat";
import { ChatService } from "../../services/chat.service";
import { Chat } from "../../models/chat/chat";

import platform = require("platform");

class ChatListModel {
    constructor(public roomId: string, public roomName: string, public roomDescription: string, public categories: string, public userSize: number, public userLimit: number, public lastActive: string) {}
}

var moment = require('moment');

// Dummy array of list-chat modelled objects
var mockChatsList = [
    {   roomId: "00000001",
        roomName: "CS3216 too stressful", 
        roomType: 0,
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress", "Family", "Relationship", "Finance", "Social", "Health", "Personal"],
        numberOfUsers: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago"},
    {   roomId: "00000002", 
        roomName: "CS3216 too relax", 
        roomType: 0,
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress"], 
        numberOfUsers: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago"}
        ,
    {   roomId: "00000002", 
        roomName: "CS3216 too fun", 
        roomType: 0,
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress"], 
        numberOfUsers: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago"},
    {   roomId: "00000002", 
        roomName: "CS3216 too exciting", 
        roomType: 0,
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress"], 
        numberOfUsers: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago"},
    {   roomId: "00000002", 
        roomName: "CS3216 too crazy", 
        roomType: 0,
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress"], 
        numberOfUsers: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago"},
    {   roomId: "00000002", 
        roomName: "CS3216 too colintan", 
        roomType: 0,
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress"], 
        numberOfUsers: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago"},
    {   roomId: "00000002", 
        roomName: "CS3216 too benleong", 
        roomType: 0,
        roomDescription: "Please help me I need help.", 
        categories: ["School", "Stress"], 
        numberOfUsers: 9, 
        userLimit: 10, 
        lastActive: moment.duration().humanize() + " ago"}
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

    constructor(private chatService: ChatService) {
        this.chats = [];

        // Uncomment this for mock data
        // let chatsList = mockChatsList; 
        console.log("HEY CHAT LIST CONSTRUCTOR");
        let chatsList = this.chatService.getAllChats();
        console.log("GET ALL CHATS LIAOOOOZZZ");
        for (var i = 0; i < chatsList.length; ++i) {
            var chatItem = chatsList[i];
            var categoriesString = "";
            for (var j = 0; j < chatItem.categories.length; ++j) {
                categoriesString += chatItem.categories[j];
                if (j < chatItem.categories.length - 1) {
                    categoriesString += ", ";
                }
            }

            var parsedChat = new ChatListModel(chatItem.roomId, chatItem.roomName, chatItem.roomDescription, categoriesString, chatItem.numberOfUsers, chatItem.userLimit, chatItem.lastActive.toString());

            this.chats.push(parsedChat);
        }
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
