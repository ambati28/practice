import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `<h2>{{name}}</h2><h3>{{description}}</h3><h1>{{functional}}</h1>`,
})
export class AppComponent2 { 
	name = 'Angular Component';
	description = 'I am much more what you think';
	functional ='Very curious to learn';
}
