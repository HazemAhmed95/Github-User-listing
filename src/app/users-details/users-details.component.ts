import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GithubService } from "../github.service";
import { User } from '../user.model';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  
  id: string;
  errorMessage: any;
  user: User;
  
  constructor(private route: ActivatedRoute,
    private router: Router, private githubservice: GithubService) { }
 
 
  ngOnInit() {
        this.route.params
    .switchMap((params: Params) => this.githubservice.getUser(params['id']))
    .subscribe((user) => this.user = user);
  } 

  
  }


