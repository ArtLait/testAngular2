import {Component} from '@angular/core';

@Component({
  selector: 'football-component',
  template: `<div>{{name}}</div>`,
  styles: ['']
})
export class FactoryResolverComponent {
  name = 'Factory Resolver';
}