import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscriber } from '../models/subscriber.model';
import { catchError, Observable, throwError } from 'rxjs';
import { Response } from '../models/response.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private http: HttpClient, private fb:FormBuilder) { }
  
   createSubscriber(subscriber:Subscriber):Observable<any>{
      const url=`${environment.apiUrl}collections/subscribers/records`;
      return this.http.post<Response<Subscriber>>(url, subscriber).pipe(catchError((err)=>{
        console.log('error caught in service')
        console.error(err);
        return throwError(err);
      }))
   }
}
