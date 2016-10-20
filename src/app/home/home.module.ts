import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HeroFormComponent } from '../staticformcomponent/hero-form.component';

import { CounterInputComponent } from '../dynamicformcomponent/counter.input.component';



import { homeRoutes } from './index';


import { TimelineComponent, ChatComponent, NotificationComponent } from './home.component';

@NgModule({
    imports: [  homeRoutes,
                CommonModule,
                ReactiveFormsModule,
                FormsModule
            ],
    declarations: [
        HomeComponent, HeroFormComponent, TimelineComponent, ChatComponent,
        CounterInputComponent,
        NotificationComponent],
    exports: [HomeComponent, TimelineComponent, ChatComponent, NotificationComponent]
    

        
    
})

export class HomeModule { }
