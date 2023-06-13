import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable, tap, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { environment } from '../environments/environment';
import { Contact } from '../models/contact.model';
import { Response } from '../models/response.model';
@Injectable({ providedIn: 'root' })
export class ContactService {

    constructor(private http: HttpClient, private fb: FormBuilder) {}

    getContact(): Observable<Response<Contact>> {
        const url = `${environment.apiUrl}collections/contacts/records`;
        return this.http.get<Response<Contact>>(url);
    }


    
    createContact(contact: Contact): Observable<any> {
        const url = `${environment.apiUrl}collections/contacts/records`;
        return this.http.post<Response<Contact>>(url, contact).pipe(catchError((err)=>{
         console.log('error caught in service')
         console.error(err);
         return throwError(err);
        })
            
        );
    }
}


