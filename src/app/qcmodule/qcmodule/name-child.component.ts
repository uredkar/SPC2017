import { Component, Input } from '@angular/core';

@Component({
  selector: 'name-child',
  template: `
    <h3>"{{name}}"</h3>
  `
})
export class NameChildComponent {
  _name: string = '<no name set>';

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name() { return this._name; }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/