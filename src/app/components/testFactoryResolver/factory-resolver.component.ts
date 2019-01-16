import {Component, ViewChild, OnInit, ComponentFactoryResolver} from '@angular/core';
import { AdHost } from './adHost.directive';
import { Ad1Component } from '../ads/ad1/ad1.component';
import { Ad2Component } from '../ads/ad2/ad2.component';

@Component({
  selector: 'resolver-component',
  templateUrl: './factory-resolver.component.html',
  styles: ['']
})
export class FactoryResolverComponent implements OnInit {
  @ViewChild(AdHost) adHost: AdHost;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    let adContainer = this.adHost.viewContainerRef;
    let ads = [Ad1Component, Ad2Component];
    let index = 0;
    setInterval(() =>
    {
      adContainer.clear();
      adContainer.createComponent(this.componentFactoryResolver.resolveComponentFactory(ads[index++ % ads.length]));
    }, 1000);
  }
}