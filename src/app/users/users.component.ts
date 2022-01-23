import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users!: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;
  // Object for adding or removing classes based on other component properties
  currentClasses = {};
  data: any;

  //Constructor
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      console.log(data);
    });

    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });
    // this.showExtended = true;
    this.setCurrentClasses();
  }

  // Add user method
  // addUser(user: User) {
  //   this.users.push(user);
  // }

  // Set ngClass method
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended,
    };
  }

  toggleExtended(user: User) {
    this.showExtended = !this.showExtended;
  }
}
