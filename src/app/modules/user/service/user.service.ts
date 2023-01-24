import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://localhost:7113/api/v1/UserCQRS/";
  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get(this.url + 'getAllUser');
  }
  getCurrentUser(id: any) {
    return this.http.get(`${this.url + 'getUserById?id=' + id}`);
    // return this.http.get(`${this.url}/${id}`);
  }
  saveUser(data: any) {
    //return this.http.post(this.url, data);
    var MainObj = { "UserModel": data };
    return this.http.post(this.url + 'addUser', MainObj);
  }
  updateUser(id: any, data: any) {
    //return this.http.put(`${this.url}/${id}`, data);
    data.id = id;
    console.log(data);
    var MainObj = { "UserModel": data };
    return this.http.put(this.url + 'updateUser', MainObj);
  }
  deleteUser(id: any) {
    //return this.http.delete(`${this.url}/${id}`);
    return this.http.delete(`${this.url + 'deleteUser?UserId=' + id}`);
  }
}
