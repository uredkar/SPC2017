import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ChatComponent } from '../home/home.component';

export const MenuRoutes: Routes = [
    { path: 'sidemenu1/home', component: HomeComponent },
    { path: 'chart', component: ChatComponent }
];


export const menuRoutes = RouterModule.forChild(MenuRoutes);