import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestInjectionRouting } from './testInjection-routing.module';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';

@NgModule({
    imports: [TestInjectionRouting, CommonModule],
    declarations: [AComponent, BComponent]
})
export class TestInjectionModule {}
