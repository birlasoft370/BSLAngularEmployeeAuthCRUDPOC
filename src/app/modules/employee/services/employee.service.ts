import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  url = "http://localhost:3000/employee";

  constructor(private http: HttpClient) { }

  getEmployeeList() {
    return this.http.get(this.url);
  }
  getCurrentEmployee(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  saveEmployee(data: any) {
    return this.http.post(this.url, data);
  }
  updateEmployee(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
  deleteEmployee(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  } 
}
