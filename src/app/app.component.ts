import { Directive, DirectiveDecorator, Component } from '@angular/core';


// webpack html imports
//let template = require('./dropdown-demo.html');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: []
})

export class AppComponent {
    title = 'app works!';
    
}
