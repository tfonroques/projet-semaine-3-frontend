import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signUp(user: any) {
    console.log('singing up', user);
    return this.http.post(`http://localhost:3000/api/users`, user).pipe(
      map((user) => {
        console.log('user :', user);
        return user;
      })
    );
  }
}
