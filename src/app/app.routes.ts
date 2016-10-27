
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { MenuRoutes } from './menu/menu.routes';
import { QCRoutes } from './qcmodule/qcmodule/qcmodule.routes';

import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './menu/sidebar.menu.component';
import { TopNavComponent } from './shared/topnav/topnav';


export const routes: Routes = [
    { path: '', component: MenuComponent },
    ...HomeRoutes,
    ...MenuRoutes,
    ...QCRoutes
    
];


export const routing = RouterModule.forRoot(routes);
