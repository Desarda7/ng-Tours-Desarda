import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthState } from '../../models/authState.model';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { User } from 'src/app/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers=new HttpHeaders().set('Content-Type', 'application/json');
  //currentUser={};
 constructor(private http: HttpClient, public router:Router){}

 //login

 login(user:User){
  return this.http.post<any>(`${environment.apiUrl}/loginExample`,user).pipe(catchError(this.handleError))
  
  // subscribe((res:any)=>{
  //   localStorage.setItem('access_token', res.token);
  //   this.router.navigate(['landing']);
  // })
 }

 getToken(){
  return localStorage.getItem('access_token');
 }

 get isLoggedIn():boolean{
  let authToken = localStorage.getItem('access_token');
  return authToken !== null ? true:false;
 }

 doLogout(){
  let removeToken = localStorage.removeItem('access_token');
  if(removeToken == null){
    this.router.navigate(['login'])
  }
 }

 handleError(error: HttpErrorResponse) {
  let msg = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    msg = error.error.message;
  } else {
    // server-side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(msg);
}
 }
