import {NgModule} from '@angular/core';
import {FactoryResolverComponent} from './factory-resolver.component';
import {FactoryResolverRoutingModule} from './factory-resolver-routing.module';
import { AdHost } from './adHost.directive';
import { Ad1Component } from '../ads/ad1/ad1.component';
import { Ad2Component } from '../ads/ad2/ad2.component';

@NgModule({
  imports: [FactoryResolverRoutingModule],
  declarations: [
    FactoryResolverComponent,
    AdHost,
    Ad1Component,
    Ad2Component,
  ],
  entryComponents: [
    Ad1Component,
    Ad2Component,
  ],
})
export class FactoryResolverModule {}
