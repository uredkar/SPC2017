export class Menu {
    // Our properties:
    // By default they are public, but can also be private or protected.
    items: Array<string>;  // The items in the menu, an array of strings.
    pages: number;         // How many pages will the menu be, a number.

    // A straightforward constructor. 
    constructor(item_list: Array<string>, total_pages: number) {
        // The this keyword is mandatory.
        this.items = item_list;
        this.pages = total_pages;
    }

    // Methods
    list(): string {
        var x = "Menu";
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
            x = x + this.items[i];
        }
        return x;
    }
}

// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);

// Call the list method.




document.body.innerHTML = sundayMenu.list();