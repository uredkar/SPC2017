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
    title = 'app works!';
    
}
