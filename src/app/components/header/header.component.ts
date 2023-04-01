import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { McquizService } from "src/app/mcquiz.service";

@Component({
    selector:'header',
    templateUrl:'header.template.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public isMenuOpened = false;
    public toggleMenu(){
        this.isMenuOpened = !this.isMenuOpened;
    }
}