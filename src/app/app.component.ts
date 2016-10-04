import { Directive, DirectiveDecorator, Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './assets/sass/app.scss']
})

export class AppComponent {
    title = 'app works!';
    
}
