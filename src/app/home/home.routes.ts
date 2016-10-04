import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChatComponent } from './home.component';
export const HomeRoutes: Routes = [
    {  path: 'sidemenu1/home', component: HomeComponent  },
    {  path: 'chat' , component: ChatComponent  }
];


export const homeRoutes = RouterModule.forChild(HomeRoutes);