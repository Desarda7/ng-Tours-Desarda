import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToursService } from 'src/app/services/tours.service';
import { Tour } from 'src/app/models/tours.model';
import { take } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Pagination } from 'src/app/models/pagination.model';




@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.scss']
})
export class ToursPageComponent implements OnInit {
 
 
searchFormValue = {
    title: '',
    destination: '',
    departurePlace: '',
    minPrice:'',
    maxPrice:'',
    departureDate:'', 
    arrivalDate:'',
    quantity:'',
  }

   pagination: Pagination={
    page: 1,
    perPage: 3,
    totalItems: 0,
    totalPages: 0
   }

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute, 
    public toursService: ToursService,
    private titleService: Title
  ) { }

  mycards: Tour[] = [];
  
  ngOnInit(): void {
    const queryParams = this.activatedRoute.snapshot.queryParams; 

    this.searchFormValue = { ...this.searchFormValue, ...queryParams };

    this.loadTours(queryParams);
  }

  loadTours(payload?: any, pagination?: Partial<Pagination>) {
    const newPagination = {...this.pagination, ...pagination}
    this.toursService.getAllTours(newPagination, payload).pipe(take(1)).subscribe(response => {
      console.log(response)
      this.pagination = {
        page: response.page,
        perPage: response.perPage,
        totalItems: response.totalItems,
        totalPages: response.totalPages
       }

      this.mycards = response.items;
      this.titleService.setTitle(this.createTitle(payload)); 
      this.router.navigate([], {queryParams:{...payload, ...this.pagination}});
      
    }); 
  }
  prevTour(){
    this.loadTours(this.searchFormValue, {page: this.pagination.page - 1})
  }

  nextTour(){
    this.loadTours(this.searchFormValue, {page: this.pagination.page + 1})
  }

  perPageChanged(perPage: number) { 
    this.loadTours(this.searchFormValue, {perPage:perPage, page: 1})
  }
  
  createTitle(payload: any): string {
  let title = '';

  if (payload.departurePlace) {
    title += 'Tours departing from ' + payload.departurePlace; 
  }

  if (payload.destination) {
    title += ' Going to ' + payload.destination; 
  }

  if (!payload.departurePlace && !payload.destination) {
    title += 'All Tours';
  }

  title += ' | NgTours';


  return title;
}
}


 