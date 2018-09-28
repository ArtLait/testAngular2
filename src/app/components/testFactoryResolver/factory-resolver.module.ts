import {NgModule} from '@angular/core';
import {FactoryResolverComponent} from './factory-resolver.component';
import {FootballRoutingModule} from './factory-resolver-routing.module';

@NgModule({
  imports: [FootballRoutingModule],
  declarations: [FactoryResolverComponent]
})
export class FactoryResolverModule {}
