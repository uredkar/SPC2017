
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup,  FormArray, FormBuilder, Validators } from '@angular/forms';

 
import { User } from  '../interface/user.interface';
import { Theme } from '../interface/theme.interface';

@Component({
  selector: 'app-sampling',
  templateUrl: './sampling.component.html',
  styleUrls: ['./sampling.component.css']
  
})
export class SamplingComponent implements OnInit {

    @Output() change: EventEmitter<boolean> = new EventEmitter();
    private _checked: boolean = false;
    public user: User;

    public genders = [
        { value: 'F', display: 'Female' },
        { value: 'M', display: 'Male' }
    ];
    public roles = [
        { value: 'admin', display: 'Administrator' },
        { value: 'guest', display: 'Guest' },
        { value: 'custom', display: 'Custom' }
    ]

    public themes: Theme[] = [
        { backgroundColor: 'black', fontColor: 'white', display: 'Dark' },
        { backgroundColor: 'white', fontColor: 'black', display: 'Light' },
        { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
    ];

    public topics = [
        { value: 'game', display: 'Gaming' },
        { value: 'tech', display: 'Technology' },
        { value: 'life', display: 'Lifestyle' },
    ];

    public toggles = [
        { value: 'toggled', display: 'Toggled' },
        { value: 'untoggled', display: 'UnToggled' },
    ];

    public t = {
        true: { value: 'toggled', display: 'Toggled' },
        false: { value: 'untoggled', display: 'UnToggled' }
    }

   
    @Input() get checked() {
        return this._checked;
    }

    //@Output() set checked() {
    //    this._checked = value;
    //}

    ngOnInit() {
        this.user = {
            id: '123',
            name: '',
            gender: "F",
            role: null,
            theme: this.themes[0],
            isActive: false,
            toggle: true,
            topics: [this.topics[1].value]
        }
    }

    onToggle(event: any)
    {
        if (this.user.toggle == true)
            this.user.toggle = false;
        else
            this.user.toggle = true;
    }
    //toggle() {
    //    this.checked = !this.checked;
    //}

    save(isValid: boolean, f: User) {
        if (!isValid) return;
        console.log(f);
    }
}