import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private apiURL = "https://api.github.com/users";

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    return this.http.get(this.apiURL)
      .map(this.extractUsers)
      .catch(this.handleError);
  }

  getUser(username): Observable<User> {

    let url = this.apiURL + "/" + username;
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractUsers(res: Response) {
    let users: User[] = [];
    let body = res.json();
    body.map(user => {
      users.push(new User({
        id: user.id,
        login: user.login
      }))

    })
    return users;

  }
  private extractData(res: Response) {
    let body = res.json();
    
    return new User ({
      id : body.id,
      login: body.login,
      created_at : body.created_at,
      avatar_url : body.avatar_url,
      name : body.name
    });
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
  
    return Observable.throw(errMsg);
  }

}
