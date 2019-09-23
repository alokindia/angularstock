import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({
    'Content-type':'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {


  loginUrl='/stockmarket'+'/user/login';

  constructor(private http:HttpClient) {this.http=http; }
 
  login(loginData:any):Observable<any>{
    return this.http.post<any[]>(this.loginUrl,loginData,httpOptions);
  }
 
}
