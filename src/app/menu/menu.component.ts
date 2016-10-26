import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from './menu.service';
import { MenuItem } from './menu.item';


import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css',
              './app.component.css' ]
})
export class MenuComponent implements OnInit, OnDestroy { 
    private menu: any;
    private selectedId: number;
    private selectedMenuItem: MenuItem;
    private sub: Subscription;

    isDarkTheme: boolean = true;

    constructor(
        private service: MenuService,
        private route: ActivatedRoute,
        private router: Router) {

       
    }

    ngOnInit() {
       
        this.sub = this.route
            .params
            .subscribe(params => {
                this.selectedId = +params['id'];

                this.service.getMenu()
                    .then(menu => this.menu = menu);
            });
        this.selectedMenuItem = new MenuItem(1, "Select");

        this.service.getMenu().then(menu => this.selectedMenuItem = menu[0]);
        
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    isSelected(menuitem: MenuItem) { return menuitem.id === this.selectedId; }

    onSelect(menuitem: MenuItem) {
        //this.router.navigate(['/menuitem', menuitem.id]);
        console.debug(menuitem.id.toString(),menuitem.name);
        this.selectedMenuItem = menuitem;
    }

    private disabled: boolean = false;
    private status: { isopen: boolean } = { isopen: false };
    private items: Array<string> = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
    private toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }
    private toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

};






