import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(formData: object) {
    return this.http.post('http://localhost:5000/login', formData);
  }

  // I hope to eventually implement this next section of code eventually - which is why I am adding it now.
  // register(formData:object){
  // return this.http.post('http://localhost:5000/register', formData);
  // }

  get_current_user() {
    return JSON.parse(localStorage.getItem('currentUser')!);
  }

  isAuthenticated() {
    return this.get_current_user() ? true : false;
  }
}
