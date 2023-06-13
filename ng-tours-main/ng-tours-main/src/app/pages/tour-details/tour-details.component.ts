import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tour } from 'src/app/models/tours.model';
import { ToursService } from 'src/app/services/tours.service';
import { environment } from 'src/app/environments/environment';
import { catchError, switchMap, throwError } from 'rxjs';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent {
  fileUrl= environment.filesUrl;
  errorMessage=null;

  tour$ = this.route.params.pipe(switchMap(params => 
    this.toursService.getOneTour(params['id']).pipe(catchError(err => {
      this.errorMessage= err.message;
      return throwError(() => err)
    }))
    ))

tour: Tour | null = null

  constructor(
    public router:Router,
    public route: ActivatedRoute, 
    public toursService: ToursService){}
                                                                                                                                                  
getImageUrl(card: any): string {
    return `${this.fileUrl}${card.collectionId}/${card.id}/${card.image}`
  }
// getGallery(card:Tour):string{
//   return `${this.fileUrl}${card.collectionId}/${card.id}/${card.gallery}`
// }
backtoTours(){
  this.router.navigate(['/tours']);
}             

 ngOnInit():void{
  }
}
