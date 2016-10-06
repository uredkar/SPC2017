import { Component, OnInit } from '@angular/core';
import { DataService } from './DataService';
//import { MyTypedItem } from '../models/MyTypedItem ';

@Component({
    selector: 'my-item-component',
    providers: [DataService],
    templateUrl: 'app/myItem/myItem.component.html',
    
})

export class MenuDataReader implements OnInit {
    public myItems: MyTypedItem[];

    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this.getAllItems();
    }

    //...

    private getAllItems(): void {
        this._dataService
            .GetAll()
            .subscribe((data: MyTypedItem[]) => this.myItems = data,
            error => console.log(error),
            () => console.log('Get all Items complete'));
    }
}