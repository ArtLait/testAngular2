import { Component } from '@angular/core';

@Component({
    selector: 'test-material',
    template: `<div><div>{{name}}</div>
    <mat-tab-group>
  <mat-tab label="First"> Content 1 </mat-tab>
  <mat-tab label="Second"> Content 2 </mat-tab>
  <mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group></div>` 
})
export class TestMaterialComponent {
    name: string = 'Test angular material component';
    constructor() {}
}