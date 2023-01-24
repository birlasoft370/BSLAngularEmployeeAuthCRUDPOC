import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  apiurl_des = 'http://localhost:41055/Designation';
  
  private _refreshrequired = new Subject<void>();
  
  apiurl = 'assets/dummydata.json';
  get RefreshRequired() {
    return this._refreshrequired;
  }

  constructor(private http: HttpClient) { }

  GetAll(): Observable<object> {
    return this.http.get(this.apiurl);
  }

  Save(inputdata: any) {
    var obj = {
      "code": "106",
      "name": "Vegetables"
    }
    // return this.http.post(this.apiurl_des, obj);
    return this.http.post(this.apiurl_des, obj).pipe(
      tap(() => {
        this.RefreshRequired.next();
      })
    );
  }
}
