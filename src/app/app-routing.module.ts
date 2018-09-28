import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestMaterialComponent } from './components/testAngularMaterial/test-angular-material.component';

const pathToComponents = 'src/app/components/';
const routes: Routes = [
  {
    path: 'onpush',
    loadChildren: pathToComponents + 'testOnpushStrategy/movie.module#MovieModule'
  },
  {
    path: 'factory',
    loadChildren: pathToComponents + 'testFactoryResolver/factory-resolver.module#FactoryResolverModule'
  },
  {
    path: 'material',
    component: TestMaterialComponent
  },
  {path: '**', redirectTo: ''},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
