import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, throwError } from 'rxjs';
import { CardsComponent } from '../shared/components/cards/cards.component';
import { Tour } from '../models/tours.model';
import { Response } from '../models/response.model';
import { TourParams } from '../models/tourParams.model';


@Injectable({
  providedIn: 'root'
})
export class ToursService {
  

  constructor(private http: HttpClient) { }

  getTours(): Observable<Response<Tour[]>> {
    const url = `${environment.apiUrl}collections/tours/records?perPage=3&sort=-updated`;
    return this.http.get<Response<Tour[]>>(url);
  };

  getAllTours(pagination: any, params?: any): Observable<Response<Tour[]>> {
    const url = `${environment.apiUrl}collections/tours/records`;
    let httpParams = new HttpParams();
    let queryString = '(';
    
    if (params) {
      for (const key in params)
        if (!params[key]) delete params[key];
    }

    if(params.title){
      queryString += `title~'${params.title}' ${Object.keys(params).length === 1 ? '' : '&&'}`
    }
    if(params.destination){
      queryString += `destination~'${params.destination}' ${Object.keys(params).length === 1 ? '' : '&&'}`
    }
    if(params.departurePlace){
      queryString += `departurePlace~'${params.departurePlace}' ${Object.keys(params).length === 1 ? '' : '&&'}`
    }
    if(params.departureDate){
      queryString += `departureDate>='${params.departureDate}' ${Object.keys(params).length === 1 ? '' : '&&'}`
    }
    if(params.arrivalDate){
      queryString += `arrivalDate>='${params.arrivalDate}' ${Object.keys(params).length === 1 ? '' : '&&'}`
    }
    if(params.quantity){
      queryString += `quantity>0 ${Object.keys(params).length === 1 ? '' : '&&'}`
  
    }
    if(params.minPrice) {
      queryString += `price>=${params.minPrice} ${Object.keys(params).length === 1 ? '' : '&&'}`
    } 

   if(params.maxPrice)  {
    queryString += `price<=${params.maxPrice}`
    }


    queryString += ')';

    if(Object.keys(params).length !== 0) {
      httpParams = httpParams.set('filter', queryString);
    }

    httpParams = httpParams.set('page', pagination.page);
    httpParams = httpParams.set('perPage', pagination.perPage);
    
    return this.http.get<Response<Tour[]>>(url, { params: httpParams });
  };

  getOneTour(id: string): Observable<Tour> {
    const url: string = `${environment.apiUrl}collections/tours/records/${id}`;
    return this.http.get<Tour>(url);
  };

}
