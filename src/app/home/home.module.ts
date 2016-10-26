import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HeroFormComponent } from '../staticformcomponent/hero-form.component';

import { CounterInputComponent } from '../dynamicformcomponent/counter.input.component';



import { homeRoutes } from './index';
import { MaterialModule } from '@angular/material';
import { MdCardModule } from '@angular/material/card';
import { MdButtonModule } from '@angular/material/button';
import { MdIconModule } from '@angular/material/icon';


import { TimelineComponent, ChatComponent, NotificationComponent } from './home.component';

@NgModule({
    imports: [  homeRoutes,
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                MdCardModule,
                MdButtonModule,
                MdIconModule,
                
                MaterialModule.forRoot()
            ],
    declarations: [
        
        HomeComponent, HeroFormComponent, TimelineComponent, ChatComponent,
        CounterInputComponent,
        NotificationComponent],
    
    exports: [HomeComponent, TimelineComponent, ChatComponent, NotificationComponent]
    

        
    
})

export class HomeModule { }
