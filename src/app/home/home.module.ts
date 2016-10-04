import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CarouselModule, DropdownModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { homeRoutes } from './index';


import { TimelineComponent, ChatComponent, NotificationComponent } from './home.component';

@NgModule({
    imports: [homeRoutes,CommonModule, CarouselModule, DropdownModule, AlertModule],
    declarations: [HomeComponent, TimelineComponent, ChatComponent, NotificationComponent],
    exports: [HomeComponent, TimelineComponent, ChatComponent, NotificationComponent]

        
    
})

export class HomeModule { }
