
import { Component } from '@angular/core';

@Component({
    
    selector: 'sidebar-menu',
    templateUrl: './sidebar.menu.component.html',
})

export class SidebarComponent {
    isActive = false;
    showMenu: string = '';

    foods: any[] = [
        { name: 'Dashboard', route: 'sidemenu1/home' },
        { name: 'D3JS', route: 'sidemenu1/d31' },
        { name: 'D3JS', route: 'sidemenu1/d32' },
        { name: 'D3JS', route: 'sidemenu1/d33' },
        { name: 'D3JS', route: 'sidemenu1/d34' },
        { name: 'D3JS', route: 'sidemenu1/d35' },
        { name: 'threshold', route: 'sidemenu1/threshold' },
        { name: 'dynamicform', route: 'sidemenu1/dynamicform' },
        { name: 'grid', route: 'sidemenu1/grid' },
        { name: 'cross', route: 'sidemenu1/cross' }
        

    ];

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
