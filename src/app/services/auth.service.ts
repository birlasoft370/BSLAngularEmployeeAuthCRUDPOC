import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url = "https://localhost:7113/api/v1/LoginCQRS/ValidateUser";
  constructor(private router: Router, private http: HttpClient) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ username, password }: any): Observable<any> {
    // if (username === 'admin' && password === 'admin123') {
    //   this.setToken('admin');
    //   return of({ name: 'admin', email: 'admin@gmail.com' });
    // }
    var obj = { "userName": username, "password": password };
    return this.http.post(this.url, obj);
    return throwError(new Error('Failed to login'));
  }
}
