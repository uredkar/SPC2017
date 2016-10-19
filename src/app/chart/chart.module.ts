import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { QcChartRoutes } from './index';

import { MyHighLowDirectiveDirective } from '../my-high-low-directive.directive';

import {  ChartComponent } from './chart.component';
import {  ChartsModule  } from 'ng2-charts/ng2-charts'

@NgModule({
    imports: [QcChartRoutes, ChartsModule, CommonModule,
              BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ChartComponent, MyHighLowDirectiveDirective ],
    exports: [ChartComponent]

        
    
})

export class QcChartModule { }
