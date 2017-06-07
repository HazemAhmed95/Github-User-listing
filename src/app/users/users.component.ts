import { Component, OnInit } from '@angular/core';
import { GithubService } from "../github.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(private githubservice: GithubService,private router: Router) { }

  users : User[];
  errorMessage:any;
  limit :number = 5; 

  ngOnInit() {
    this.router.navigate(['/users/mojombo']);
    this.githubservice.getUsers().subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error)
  }

  loadMore():void {
    this.limit += 5;
  }

}
