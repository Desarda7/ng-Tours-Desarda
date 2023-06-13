import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursPageComponent } from './tours-page.component';
import { NavbarComponent } from 'src/app/shared/components/navbar.component';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { TourDetailsComponent } from '../tour-details/tour-details.component';
import { Tour } from 'src/app/models/tours.model';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ToursPageComponent,
    TourDetailsComponent
  

  ],
  imports: [
    CommonModule,
    NavbarComponent,
    CardsComponent,
    FormsModule,
    ReactiveFormsModule,
   
  ]
})
export class ToursPageModule { }
