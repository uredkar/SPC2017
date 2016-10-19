﻿
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




//import { homeRoutes } from './home/index';
import { HomeRoutes } from './home/index';
import { MenuRoutes } from './menu/menu.routes';


import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './menu/sidebar.menu.component';
import { TopNavComponent } from './shared/topnav/topnav';


export const routes: Routes = [
    
    
    { path: '', component: MenuComponent },
    ...HomeRoutes,
    ...MenuRoutes
    


    
];


export const routing = RouterModule.forRoot(routes);
