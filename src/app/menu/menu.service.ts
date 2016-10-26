import { Injectable } from '@angular/core';
import { MenuItem } from './menu.item';
import { MENU } from './menu.item';

let menuPromise = Promise.resolve(MENU);

@Injectable()
export class MenuService {
    getMenu() { return menuPromise; }

    getMenuItem(id: number | string) {
        return menuPromise.then(menu => menu.find(menuitem => menuitem.id === +id));
    }
}




