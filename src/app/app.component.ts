import { Directive, DirectiveDecorator, Component } from '@angular/core';

import { QuestionService } from './dynamicformcomponent/question.service';
// webpack html imports




@Component({
    
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [QuestionService],
    styleUrls: []
})
export class AppComponent {
    isDarkTheme: boolean = true;

    constructor() {
        // Update the value for the progress-bar on an interval.
    
    }
}
