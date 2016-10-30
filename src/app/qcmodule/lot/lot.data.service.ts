/// <reference path="../interface/lot.interface.ts" />
import { Injectable } from '@angular/core';
import { Lot } from '../interface/lot.interface';
let lots: Lot[] = [
    { name: 'Admin', id: '11' },
    { name: 'Admin', id: '11' },
    { name: 'Admin', id: '11' }

];


@Injectable()
export class LotDataService {
    

    getLots()
    {
            return lots;
    }
}
