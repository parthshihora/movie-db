import { Component, OnInit } from '@angular/core';
import {DataFlowService} from '../data-flow.service';
import { User } from '../user';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private dataFlowService: DataFlowService) { }

  users: User[];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.dataFlowService.getUsers().subscribe(users => {
      this.users = users;
    });

  }
  checkUser(username, password) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username && this.users[i].password === password) {
        this.dataFlowService.setUser(this.users[i]);
        this.router.navigate(['all-movies']);
      }

    }
  }
}
