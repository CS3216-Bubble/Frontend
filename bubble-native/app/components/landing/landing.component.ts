import {Component} from '@angular/core';

@Component({
    selector: "landing",
    template: `
    <StackLayout>
        <Label text="Landing Page" class="title"></Label>
        <Button text="Start" [nsRouterLink]="['/list']" class="link" clearHistory="true"></Button>
    </StackLayout>`
})
export class LandingComponent { }