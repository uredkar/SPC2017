import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
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
import { PagecomponentComponent } from './pagecomponent/pagecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    PagecomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
