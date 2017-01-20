import { Component } from '@angular/core';

import { AppComponent2 } from './app.comp2'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} </h1>
  <header></header>
  `,
})
export class AppComponent  { name = 'Angular'; }
