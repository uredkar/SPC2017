


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, NgClass } from '@angular/common';

import { HttpModule } from '@angular/http';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from './dynamicformcomponent/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamicformcomponent/dynamic-form-question.component';
import { DynamicFormHost } from './dynamicformcomponent/dynamicformhost';


import { D3Service } from 'd3-ng2-service'; // <-- import statement
/// application 
import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routes';


import { AppComponent } from './app.component';
import { MenuService } from './menu/menu.service';
import { TopNavComponent } from './shared/topnav/topnav';

import { BrushZoom2Component } from './d3jsmodule/d3-demos/brush-zoom-2/brush-zoom-2.component';
import { DragZoom2Component } from './d3jsmodule/d3-demos/drag-zoom-2/drag-zoom-2.component';
import { VoronoiSpirals3Component } from './d3jsmodule/d3-demos/voronoi-spirals-3/voronoi-spirals-3.component';
import { SimpleLineGraph } from './d3jsmodule/d3-demos/simplelinegraph/simple-line-graph';
import { MultiLineGraph } from './d3jsmodule/d3-demos/simplelinegraph/multiline-graph';
import { ChartThresholdGraph } from './d3jsmodule/d3-demos/threshold/chart-threshold-graph';
import { QuestionService } from './dynamicformcomponent/question.service';
import { CrossFilterComponent } from './d3jsmodule/d3-demos/crossfilter/crossfilter.component';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';


import { DropdownModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
// application components

import { PlanningComponent } from './qcmodules/planning/planning.component';
import { ReceivingComponent } from './qcmodules/receiving/receiving.component';
import { ShipingComponent } from './qcmodules/shiping/shiping.component';
import { InventoryComponent } from './qcmodules/inventory/inventory.component';
import { RetainComponent } from './qcmodules/retain/retain.component';
import { QcComponent } from './qcmodules/qc/qc.component';
import { SearchComponent } from './qcmodules/search/search.component';
import { SamplingComponent } from './qcmodules/sampling/sampling.component';
import { QccertComponent } from './qcmodules/qccert/qccert.component';
import { SampleplaningComponent } from './qcmodules/sampleplaning/sampleplaning.component';
import { QctestplaningComponent } from './qcmodules/qctestplaning/qctestplaning.component';
import { QctestComponent } from './qcmodules/qctest/qctest.component';
import { QcreportComponent } from './qcmodules/qcreport/qcreport.component';
import { QcadjustmentComponent } from './qcmodules/qcadjustment/qcadjustment.component';
import { QcapprovalComponent } from './qcmodules/qcapproval/qcapproval.component';
import { QcrejectionComponent } from './qcmodules/qcrejection/qcrejection.component';
import { VendorsComponent } from './qcmodules/vendors/vendors.component';
import { CustomersComponent } from './qcmodules/customers/customers.component';
import { ProductComponent } from './qcmodules/product/product.component';
import { QcteamComponent } from './qcmodules/qcteam/qcteam.component';

import { MainpageComponent } from './mainpage/mainpage.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './menu/sidebar.menu.component';
import { PagecomponentComponent } from './pagecomponent/pagecomponent.component';

import { HotTable } from 'ng2-handsontable/components/handsontable/handsontable';

import { handsontable } from 'ng2-handsontable/components/index';

import { HandsontableComponent } from './apphandsontable/handsontable.component';
import { AdvancedDemo } from './apphandsontable/advanceddemo.component';

// custom modules
import { HomeModule } from './home/home.module';




import { QcChartModule } from './chart/chart.module';


@NgModule({
    declarations: [
   
    
    AppComponent,
    LoginComponent,
    TopNavComponent,
    AdminComponent,
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
    QcapprovalComponent,
    QcrejectionComponent,
    VendorsComponent,
    CustomersComponent,
    ProductComponent,
    QcteamComponent,
    MainpageComponent,
    MenuComponent,
    SidebarComponent,
    PagecomponentComponent,

    VoronoiSpirals3Component, DragZoom2Component, BrushZoom2Component, SimpleLineGraph,
    MultiLineGraph, ChartThresholdGraph,

    DynamicFormComponent, DynamicFormQuestionComponent, DynamicFormHost,
    CrossFilterComponent,
    


    handsontable, HandsontableComponent, AdvancedDemo

    
  ],
    imports: [
        HomeModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        QcChartModule,
        DropdownModule, AlertModule,
        routing,
  ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, MenuService,
        QuestionService,
        D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

