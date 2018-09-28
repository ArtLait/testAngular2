import { NgModule } from '@angular/core';
import { MovieComponent } from './movie.component';
import { MovieContainerComponent } from './movieContainer.component';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  imports: [
    MovieRoutingModule
  ],
  declarations: [
    MovieComponent,
    MovieContainerComponent
  ]
})
export class MovieModule {
}
