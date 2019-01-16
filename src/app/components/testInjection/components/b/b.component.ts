import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AComponent } from '../a/a.component';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {
  @Input('users') 
    users: string[];

  constructor() {}

  ngOnInit() {
    console.log();
  }
}