/// <reference path="../interface/customer.interface.ts" />
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../interface/customer.interface';
import { LotDataService } from './lot.data.service';
import { Lot } from '../interface/lot.interface';


@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.css'],
  providers: [LotDataService]
})
export class LotComponent implements OnInit {
  private lot: Lot[];
  
  constructor(service: LotDataService, private _fb: FormBuilder) {

      this.lot = service.getLots();
  }

  ngOnInit()
  {

  }

}
