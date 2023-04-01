import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { McquizService } from "src/app/mcquiz.service";

@Component({
    selector:'about',
    templateUrl:'about.template.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    public isMenuOpened = false;
    public toggleMenu(){
        this.isMenuOpened = !this.isMenuOpened;
    }
}