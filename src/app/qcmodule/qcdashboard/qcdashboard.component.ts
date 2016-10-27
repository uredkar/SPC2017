import { Component, Input , Inject } from '@angular/core';

@Component({
	selector: 'qcdashboard-cmp',
    templateUrl: 'qcdashboard.component.html'
})
export class QcDashboardComponent {

    isDarkTheme: boolean = false;

    foods: any[] = [
        { name: 'Pizza', rating: 'Excellent' },
        { name: 'Burritos', rating: 'Great' },
        { name: 'French fries', rating: 'Pretty good' },
    ];

     
     constructor() {
    
	}

	
}
