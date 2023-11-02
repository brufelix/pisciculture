import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})
export class ListComponent {
    @ViewChild('buttonRef', { static: true }) button: any;

    constructor(private router: Router) { }

    handleClick() {
        // somente para uso do View Child
        this.button.nativeElement.textContent = 'button clicked';
        console.log("element obtained with view child")
        this.router.navigate(["/"])
    }
}
