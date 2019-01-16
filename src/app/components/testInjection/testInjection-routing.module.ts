import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AComponent } from './components/a/a.component';

let routes = [
    {
        path: '',
        component: AComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class TestInjectionRouting {}