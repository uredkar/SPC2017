/// <reference path="../interface/customer.interface.ts" />
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../interface/customer.interface';
import { QCSearchDataService } from './qcsearch.data.service';
import { Lot } from '../interface/lot.interface';


@Component({
  selector: 'app-qcsearch',
  templateUrl: './qcsearch.component.html',
  styleUrls: ['./qcsearch.component.css'],
  providers: [QCSearchDataService]
})
export class QCSearchComponent implements OnInit {
    private lot: Lot[];
    items: string[] = [
        'Pepper',
        'Salt',
        'Paprika'
    ];

    contacts: any[] = [
        { name: 'Nancy', headline: 'Software engineer' },
        { name: 'Mary', headline: 'TPM' },
        { name: 'Bobby', headline: 'UX designer' }
    ];

    messages: any[] = [
        {
            from: 'Nancy',
            subject: 'Brunch?',
            message: 'Did you want to go on Sunday? I was thinking that might work.',
            image: 'https://angular.io/resources/images/bios/julie-ralph.jpg'
        },
        {
            from: 'Mary',
            subject: 'Summer BBQ',
            message: 'Wish I could come, but I have some prior obligations.',
            image: 'https://angular.io/resources/images/bios/juleskremer.jpg'
        },
        {
            from: 'Bobby',
            subject: 'Oui oui',
            message: 'Do you have Paris reservations for the 15th? I just booked!',
            image: 'https://angular.io/resources/images/bios/jelbourn.jpg'
        }
    ];

    links: any[] = [
        { name: 'Inbox' },
        { name: 'Outbox' },
        { name: 'Spam' },
        { name: 'Trash' }

    ];

    thirdLine: boolean = false;
    infoClicked: boolean = false;
  
  constructor(service: QCSearchDataService, private _fb: FormBuilder) {

      this.lot = service.getLots();


  }

  ngOnInit()
  {

  }

}
