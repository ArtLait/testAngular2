import { Component } from '@angular/core';
import { Service } from './services/service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

class Test {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  title = 'app';
  constructor(service: Service, private http: HttpClient, private route: ActivatedRoute) {
    service.setNewUser('newUserName');
    let users = service.getUsers();
  }

  ngOnInit() {
    let json = this.http.get<Test>('assets/test.json', { observe: 'response' }).subscribe(res => {console.log('res', res)});
    console.log('json from assets', json);
  }
}