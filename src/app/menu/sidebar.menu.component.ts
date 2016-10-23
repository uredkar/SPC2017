
import { Component } from '@angular/core';

@Component({
    
    selector: 'sidebar-menu',
    templateUrl: './sidebar.menu.component.html',
})

export class SidebarComponent {
    isActive = false;
    showMenu: string = '';
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
