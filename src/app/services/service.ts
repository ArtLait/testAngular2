import { Injectable } from '@angular/core';

@Injectable()
export class Service {
  users: any[] = [1, '12', 15, 'Artem']
  constructor() {}

  setNewUser(name: string): void {
    this.users.push(name);
  }

  getUsers(): any[] {
    return this.users
  }
}
