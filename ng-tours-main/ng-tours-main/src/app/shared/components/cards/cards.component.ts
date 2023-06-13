import { Component, Input, OnInit } from '@angular/core';
import { ToursService } from 'src/app/services/tours.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Tour } from 'src/app/models/tours.model';
import { Response } from 'src/app/models/response.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class CardsComponent implements OnInit {

@Input() card: Tour | null = null;
fileUrl = environment.filesUrl;

constructor(public router : Router){}

getImageUrl(card: any): string {
  return `${this.fileUrl}${card.collectionId}/${card.id}/${card.image}`
}
showDetails(id:string){
 this.router.navigateByUrl(`/tours/${id}`)
 
}

ngOnInit() {
  
   
}

}
