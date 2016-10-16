
 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { ReactiveFormsModule } from '@angular/forms';
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
import { QuestionService } from './dynamicformcomponent/question.service';


import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';


import {  DropdownModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
// application components

import { PlanningComponent } from './planning/planning.component';
import { ReceivingComponent } from './receiving/receiving.component';
import { ShipingComponent } from './shiping/shiping.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RetainComponent } from './retain/retain.component';
import { QcComponent } from './qc/qc.component';
import { SearchComponent } from './search/search.component';
import { SamplingComponent } from './sampling/sampling.component';
import { QccertComponent } from './qccert/qccert.component';
import { SampleplaningComponent } from './sampleplaning/sampleplaning.component';
import { QctestplaningComponent } from './qctestplaning/qctestplaning.component';
import { QctestComponent } from './qctest/qctest.component';
import { QcreportComponent } from './qcreport/qcreport.component';
import { QcadjustmentComponent } from './qcadjustment/qcadjustment.component';
import { QcapprovalComponent } from './qcapproval/qcapproval.component';
import { QcrejectionComponent } from './qcrejection/qcrejection.component';
import { VendorsComponent } from './vendors/vendors.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductComponent } from './product/product.component';
import { QcteamComponent } from './qcteam/qcteam.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './menu/sidebar.menu.component';
import { PagecomponentComponent } from './pagecomponent/pagecomponent.component';

import { HotTable } from './apphandsontable/ng2-handsontable/components/handsontable/handsontable';

import { handsontable } from './apphandsontable/ng2-handsontable/components/index';

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
    MultiLineGraph,

    DynamicFormComponent, DynamicFormQuestionComponent, DynamicFormHost,
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

