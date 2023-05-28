import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User.model';
import { AddUserComponent } from '../components/Users/add-user/add-user.component';
import { LocalStorageToken } from '../localStorage.token';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = environment.baseUrl;

 ChnageUser?: User
 token = localStorage.getItem("token");

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  };
  getallusers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/api/User', this.httpOptions);
  }
  getuser(id:string): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/api/User/' + id, this.httpOptions);
  }

  UpdateUser(id:number, req:User):Observable<User> {
    return this.http.put<User>(this.baseUrl + '/api/User/' + id, req, this.httpOptions);
      }

  DeleteUser(id:number):Observable<User> {
    return this.http.delete<User>(this.baseUrl + '/api/User/' + id, this.httpOptions);
      }

      GetUserByToken(): Observable<User> {
        return this.http.get<User>(this.baseUrl + '/api/Auth/GetUserByToken', this.httpOptions);
      }


}
