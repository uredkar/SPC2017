import { Routes, RouterModule } from '@angular/router';

import { ChartComponent } from './chart.component';

export const ChartRoutes: Routes = [
    { path: 'sidemenu1/chart', component: ChartComponent },
    { path: 'chart', component: ChartComponent }
];


export const QcChartRoutes = RouterModule.forChild(ChartRoutes);