import { Routes, RouterModule } from '@angular/router';
import { QcDashboardComponent } from '../qcdashboard/qcdashboard.component';

export const QCRoutes : Routes = [
    { path: '', component: QcDashboardComponent },
    { path: 'qcmenu/home', component: QcDashboardComponent  },
    { path: 'qcmenu', component: QcDashboardComponent  }
];


export const qcRoutes = RouterModule.forChild(QCRoutes);