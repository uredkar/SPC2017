import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { QcDashboardComponent } from '../qcdashboard/qcdashboard.component';
import { RouterModule } from '@angular/router';

import { LotComponent } from '../lot/lot.component';
import { PlanningComponent } from '../planning/planning.component';
import { ReceivingComponent } from '../receiving/receiving.component';
import { ShipingComponent } from '../shiping/shiping.component';
import { InventoryComponent } from '../inventory/inventory.component';
import { RetainComponent } from '../retain/retain.component';
import { QcComponent } from '../qc/qc.component';
import { SearchComponent } from '../search/search.component';
import { SamplingComponent } from '../sampling/sampling.component';
import { QccertComponent } from '../qccert/qccert.component';
import { SampleplaningComponent } from '../sampleplaning/sampleplaning.component';
import { QctestplaningComponent } from '../qctestplaning/qctestplaning.component';
import { QctestComponent } from '../qctest/qctest.component';
import { QcreportComponent } from '../qcreport/qcreport.component';
import { QcadjustmentComponent } from '../qcadjustment/qcadjustment.component';

import { QcrejectionComponent } from '../qcrejection/qcrejection.component';
import { VendorsComponent } from '../vendors/vendors.component';
import { CustomersComponent } from '../customers/customers.component';
import { ProductComponent } from '../product/product.component';
import { QcteamComponent } from '../qcteam/qcteam.component';


import { MaterialModule } from '@angular/material';
import { MdCardModule } from '@angular/material/card';
import { MdButtonModule } from '@angular/material/button';
import { MdIconModule } from '@angular/material/icon';


import { AstronautComponent } from './astronaut.component';
import { CountdownLocalVarParentComponent, CountdownViewChildParentComponent } from './countdown-parent.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';
import { MissionControlComponent } from './missioncontrol.component';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './votetaker.component';

let directives: any[] = [
    
    AstronautComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    CountdownTimerComponent,
    HeroChildComponent,
    HeroParentComponent,
    MissionControlComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent
];

let schemas: any[] = [];

@NgModule({
    imports: [  
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                MdCardModule,
                MdButtonModule,
                MdIconModule,
                MaterialModule.forRoot()
            ],
    declarations: [
                QcDashboardComponent,
                LotComponent,
                PlanningComponent,
                ReceivingComponent,
                ShipingComponent,
                InventoryComponent,
                RetainComponent,
                QcComponent,
                SearchComponent,
                SamplingComponent,
                QccertComponent,
                SampleplaningComponent,
                QctestplaningComponent,
                QctestComponent,
                QcreportComponent,
                QcadjustmentComponent,
                
                QcrejectionComponent,
                VendorsComponent,
                CustomersComponent,
                ProductComponent,
                QcteamComponent,
                ...directives
                  ],
    
    exports: [QcDashboardComponent]
    

        
    
})
export class QcModule { }
