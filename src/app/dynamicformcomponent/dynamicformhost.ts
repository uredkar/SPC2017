
import { QuestionService } from './question.service';
import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../interface/customer.interface';

@Component({
    selector: 'dynamicformhost',
    templateUrl: './dynamicformhost.html',
    providers: [QuestionService],
    styleUrls: []
})

export class DynamicFormHost {
    public myForm: FormGroup;
    questions: any[];
    constructor(service: QuestionService, private _fb: FormBuilder)
    {
        
        this.questions = service.getQuestions();
    }

    
    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    }

    initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

    addAddress() {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.push(this.initAddress());
    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['addresses'];
        control.removeAt(i);
    }

    save(model: Customer) {
        // call API to save
        // ...
        console.log(model);
    }

}
