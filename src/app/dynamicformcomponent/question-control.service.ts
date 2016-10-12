import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';
import { QuestionService } from './question.service';

@Injectable()
export class QuestionControlService {
    constructor() { }

    toFormGroup(questions: QuestionBase<any>[]) {
        let group: any = {};
        
        questions.forEach(question =>
        {
            console.log(question.key);
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    }
}
