import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ChatComponent } from '../home/home.component';
import { D3Component } from '../d3jsmodule/d3js.component';
export const MenuRoutes: Routes = [
    { path: 'sidemenu1/home', component: HomeComponent },
    { path: 'chart', component: ChatComponent },
    { path: 'sidemenu1/d3', component: D3Component }
];


export const menuRoutes = RouterModule.forChild(MenuRoutes);