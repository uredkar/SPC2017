import { Injectable } from '@angular/core';
import * as Collections from 'typescript-collections';
export class MenuItem {
    constructor(public id: number, public name: string) { }
}

export let MENU = [
    new MenuItem(11, 'Receiving'),
    new MenuItem(12, 'Manufacturing'),
    new MenuItem(13, 'Retain'),
    new MenuItem(14, 'Testing'),
    new MenuItem(15, 'Certification'),
    new MenuItem(16, 'Analysis')
];


class Person {
    constructor(public name: string, public yearOfBirth: number, public city?: string) {
    }
    toString() {
        return this.name + "-" + this.yearOfBirth; // City is not a part of the key.
    }
}

class Car {
    constructor(public company: string, public type: string, public year: number) {
    }
    toString() {
        // Short hand. Adds each own property
        return Collections.util.makeString(this);
    }
}
var dict = new Collections.Dictionary<Person, Car>();
dict.setValue(new Person("john", 1970, "melbourne"), new Car("honda", "city", 2002));
dict.setValue(new Person("gavin", 1984), new Car("ferrari", "F50", 2006));
console.log("Orig");
console.log(dict);

// Changes the same john, since city is not part of key
dict.setValue(new Person("john", 1970, "sydney"), new Car("honda", "accord", 2006));
// Add a new john
dict.setValue(new Person("john", 1971), new Car("nissan", "micra", 2010));
console.log("Updated");
console.log(dict);

// Showing getting / setting a single car:
console.log("Single Item");
var person = new Person("john", 1970);
console.log("-Person:");
console.log(person);

var car = dict.getValue(person);
console.log("-Car:");
console.log(car.toString());
//export let 