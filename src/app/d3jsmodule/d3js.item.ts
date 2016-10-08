import { Injectable } from '@angular/core';

export class MenuItem {
    constructor(public id: number, public name: string) { }
}

export let MENU = [
    new MenuItem(11, 'Mr. Nice'),
    new MenuItem(12, 'Narco'),
    new MenuItem(13, 'Bombasto'),
    new MenuItem(14, 'Celeritas'),
    new MenuItem(15, 'Magneta'),
    new MenuItem(16, 'RubberMan')
];


