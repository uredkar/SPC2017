import { Routes, RouterModule } from '@angular/router';
import { QcDashboardComponent } from '../qcdashboard/qcdashboard.component';
import { SamplingComponent } from '../sampling/sampling.component';

export const QCRoutes : Routes = [
    { path: '', component: QcDashboardComponent },
    { path: 'qcmenu/home', component: QcDashboardComponent  },
    { path: 'qcmenu', component: QcDashboardComponent },
    { path: 'qcmenu/sampling', component: SamplingComponent }

];


export const qcRoutes = RouterModule.forChild(QCRoutes);