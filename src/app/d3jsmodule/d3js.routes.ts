import { Routes, RouterModule } from '@angular/router';

import { ChartComponent } from './chart.component';
import { BrushZoom2Component } from './chart.component';

export const ChartRoutes: Routes = [
    { path: 'sidemenu1/chart', component: BrushZoom2Component },
    { path: 'chart', component: ChartComponent }
];


export const QcChartRoutes = RouterModule.forChild(ChartRoutes);