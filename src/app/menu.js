"use strict";
var Menu = (function () {
    // A straightforward constructor. 
    function Menu(item_list, total_pages) {
        // The this keyword is mandatory.
        this.items = item_list;
        this.pages = total_pages;
    }
    // Methods
    Menu.prototype.list = function () {
        var x = "Menu";
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
            x = x + this.items[i];
        }
        return x;
    };
    return Menu;
}());
exports.Menu = Menu;
// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
// Call the list method.
document.body.innerHTML = sundayMenu.list();
