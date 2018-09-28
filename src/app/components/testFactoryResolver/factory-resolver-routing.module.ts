import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { FactoryResolverComponent } from './factory-resolver.component';

const routing = [{
  path: '',
  component: FactoryResolverComponent
}];
@NgModule({
    imports: [RouterModule.forChild(routing)],
    exports: [RouterModule]
})
export class FootballRoutingModule {}
