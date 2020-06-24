import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Auth_result } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api_url = 'http://localhost:8000';
  http_options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('razerx100:3540')
    })
  };
  constructor(private http: HttpClient) { }

  private handleError<T>(result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  check_user(username: string, password: string): Observable<Auth_result> {
    const url = this.api_url + '/check_user'
    return this.http.post<Auth_result>(url, {"user": username, "password": password}, this.http_options).pipe(
      catchError(this.handleError<Auth_result>())
    );
  }

}
