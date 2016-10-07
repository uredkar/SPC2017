import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { QcChartRoutes } from './index';


import {  ChartComponent } from './chart.component';
import {  ChartsModule  } from 'ng2-charts/ng2-charts'

@NgModule({
    imports: [QcChartRoutes,ChartsModule, CommonModule],
    declarations: [ ChartComponent],
    exports: [ChartComponent]

        
    
})

export class QcChartModule { }
