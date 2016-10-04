﻿
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




import { homeRoutes } from './home/index';
import { HomeRoutes } from './home/index';


import { MenuComponent } from './menu/menu.component';
import { SideBarMenuComponent } from './menu/sidebar.menu.component';
import { TopNavComponent } from './shared/topnav/topnav';


export const routes: Routes = [
    
    { path: '',  component: SideBarMenuComponent },
    { path: '', component: MenuComponent },
    ...HomeRoutes
    


    
];


export const routing = RouterModule.forRoot(routes);
