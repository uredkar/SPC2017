import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ChatComponent } from '../home/home.component';

import { BrushZoom2Component } from '../d3jsmodule/d3-demos/brush-zoom-2/brush-zoom-2.component';
import { DragZoom2Component } from '../d3jsmodule/d3-demos/drag-zoom-2/drag-zoom-2.component';
import { VoronoiSpirals3Component } from '../d3jsmodule/d3-demos/voronoi-spirals-3/voronoi-spirals-3.component';


export const MenuRoutes: Routes = [
    { path: 'sidemenu1/home', component: HomeComponent },
    { path: 'chart', component: ChatComponent },
    { path: 'sidemenu1/d31', component: BrushZoom2Component },
    { path: 'sidemenu1/d32', component: DragZoom2Component },
    { path: 'sidemenu1/d33', component: VoronoiSpirals3Component }
];


export const menuRoutes = RouterModule.forChild(MenuRoutes);