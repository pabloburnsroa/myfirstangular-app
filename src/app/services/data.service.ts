import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users: User[];
  data!: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 18,
        address: {
          street: '1 St.',
          city: 'City',
          state: 'State',
        },
        image:
          'https://images.unsplash.com/photo-1619970096024-c7b438a3b82a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80',
        isActive: true,
      },
      {
        firstName: 'James',
        lastName: 'Smith',
        age: 18,
        address: {
          street: '2 St.',
          city: 'City',
          state: 'State',
        },
        image:
          'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
      },
      {
        firstName: 'Anne',
        lastName: 'Williams',
        age: 18,
        address: {
          street: '3 St.',
          city: 'City',
          state: 'State',
        },
        image:
          'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
      },
    ];
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
    });
    return this.data;
  }
  getUsers(): Observable<User[]> {
    console.log('Fetching the users from service...');
    return of(this.users);
  }
  addUser(user: User) {
    this.users.unshift(user);
  }
}
