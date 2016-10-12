import { QuestionService } from './question.service';
import { Component } from '@angular/core';

@Component({
    selector: 'dynamicformhost',
    templateUrl: './dynamicformhost.html',
    providers: [QuestionService],
    styleUrls: []
})

export class DynamicFormHost {
    questions: any[];
    constructor(service: QuestionService) {
        
        this.questions = service.getQuestions();
    }

}
