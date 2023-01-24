import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  apiurl = 'https://localhost:7113/api/v1/GroceryCQRS/';

  private _refreshrequired = new Subject<void>();

  //apiurl = 'assets/dummydata.json';

  get RefreshRequired() {
    return this._refreshrequired;
  }

  constructor(private http: HttpClient) { }

  GetAll(): Observable<object> {
    return this.http.get(`${this.apiurl + 'getAllGrocery'}`);
  }

  Save(inputdata: any) {
    // return this.http.post(this.apiurl_des, obj);
    var MainObj = { "groceryModel": inputdata };
    return this.http.post((this.apiurl + 'addGrocery'), MainObj).pipe(
      tap(() => {
        this.RefreshRequired.next();
      })
    );
  }
}
