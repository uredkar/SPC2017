import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChartComponent } from '../chart/chart.component';
export const HomeRoutes: Routes = [
    { path: '', component: HomeComponent },
    {  path: 'sidemenu1/home', component: HomeComponent  },
    {  path: 'chart' , component: ChartComponent  }
];


export const homeRoutes = RouterModule.forChild(HomeRoutes);