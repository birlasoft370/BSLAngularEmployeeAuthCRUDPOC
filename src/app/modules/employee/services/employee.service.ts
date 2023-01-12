import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //url = "http://localhost:3000/employee";
  url = "https://localhost:7113/api/v1/EmployeeCQRS/";
  DeptAPIUrl = "https://localhost:7113/api";

  constructor(private http: HttpClient) { }

  getEmployeeList() {
    return this.http.get(this.url + 'getAllEmployee');
  }
  getCurrentEmployee(id: any) {
    return this.http.get(`${this.url + 'getEmployeeById?id=' + id}`);
    // return this.http.get(`${this.url}/${id}`);
  }
  saveEmployee(data: any) {
    //return this.http.post(this.url, data);
    var MainObj = { "employeeModel": data };
    return this.http.post(this.url + 'addEmployee', MainObj);
  }
  updateEmployee(id: any, data: any) {
    //return this.http.put(`${this.url}/${id}`, data);
    data.id = id;
    var MainObj = { "employeeModel": data };
    return this.http.put(this.url + 'updateEmployee', MainObj);
  }
  deleteEmployee(id: any) {
    //return this.http.delete(`${this.url}/${id}`);
    return this.http.delete(`${this.url + 'deleteEmployee?employeeId=' + id}`);
  }


  getDepList(): Observable<any[]> {
    return this.http.get<any>(this.DeptAPIUrl + '/department');
  }

  addDepartment(val: any) {
    return this.http.post(this.DeptAPIUrl + '/Department', val, { responseType: 'text' });
  }

  updateDepartment(val: any) {
    return this.http.put(this.DeptAPIUrl + '/Department', val, { responseType: 'text' });
  }

  deleteDepartment(val: any) {
    return this.http.delete(this.DeptAPIUrl + '/Department/' + val, { responseType: 'text' });
  }

}
