import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ChatComponent } from '../home/home.component';
import { BrushZoom2Component } from '../d3jsmodule/d3js.brush.zoom';
export const MenuRoutes: Routes = [
    { path: 'sidemenu1/home', component: HomeComponent },
    { path: 'chart', component: ChatComponent },
    { path: 'sidemenu1/d3', component: BrushZoom2Component }
];


export const menuRoutes = RouterModule.forChild(MenuRoutes);