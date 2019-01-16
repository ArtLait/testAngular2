import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MovieContainerComponent} from './movieContainer.component';

const routes = [
  {
    path: '',
    component: MovieContainerComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class MovieRoutingModule {}
