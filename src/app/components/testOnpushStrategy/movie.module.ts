import { NgModule } from '@angular/core';
import { MovieComponent } from './movie.component';
import { MovieContainerComponent } from './movieContainer.component';
import { MovieRoutingModule } from './movie-routing.module';
import { Service } from 'src/app/services/service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  declarations: [
    MovieComponent,
    MovieContainerComponent
  ],
  providers: []
})
export class MovieModule {
  constructor(service: Service) {
    setTimeout( () => {
    let users = service.getUsers();
    console.log(users);
  }, 1000);
  }
}