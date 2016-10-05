import { Injectable } from '@angular/core';

export class MenuItem {
    constructor(public id: number, public name: string) { }
}

let MENU = [
    new MenuItem(11, 'Mr. Nice'),
    new MenuItem(12, 'Narco'),
    new MenuItem(13, 'Bombasto'),
    new MenuItem(14, 'Celeritas'),
    new MenuItem(15, 'Magneta'),
    new MenuItem(16, 'RubberMan')
];

let menuPromise = Promise.resolve(MENU);

@Injectable()
export class MenuService {
    getMenu() { return menuPromise; }

    getMenuItem(id: number | string) {
        return menuPromise.then(menu => menu.find(menuitem => menuitem.id === +id));
    }
}


