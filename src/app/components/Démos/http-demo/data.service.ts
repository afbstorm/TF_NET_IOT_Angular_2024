import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    return this._http.get(this.url);
  }
}
