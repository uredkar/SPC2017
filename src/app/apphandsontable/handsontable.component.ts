
import {
   NgClass
} from '@angular/common';

import {Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { getAdvancedData } from './data';


let gettingStarted = "require('./getting-started.md')";

@Component({
  selector: 'handsontablecomponent',
  template: `
  <main class="bd-pageheader">
    <div class="container">
      <h1>ng2-handsontable</h1>
     
    </div>
  </main>

  <div class="container">
    <section id="getting-started">${gettingStarted}</section>

    
  </div>

 
  `
})
export class HandsontableComponent {
}






