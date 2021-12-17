import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { User } from '../model/user-interface';
import { Observable } from 'rxjs';
// import * as request from '../config/request-mapping';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private _http: HttpClient) { }

  getUserDetails(): Observable<any>{
    return this._http.get<any>('/url').pipe(map(res => res));
  }
}


