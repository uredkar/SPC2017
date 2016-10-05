import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


/// application 
import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routes';


import { AppComponent } from './app.component';
import { MenuService } from './menu/menu.service';
import { TopNavComponent } from './shared/topnav/topnav';




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


// custom modules
import { HomeModule } from './home/home.module';


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

    
    
  ],
    imports: [
        HomeModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        DropdownModule, AlertModule,
        routing,
  ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
