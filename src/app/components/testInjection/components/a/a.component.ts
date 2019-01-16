import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent {
  name: string = 'AComponent';
  users: string[] = ['Artem', 'Ivan', 'Sasha', 'Andrei'];

  constructor() {
  }

  ngOnInit() {
  }
}
