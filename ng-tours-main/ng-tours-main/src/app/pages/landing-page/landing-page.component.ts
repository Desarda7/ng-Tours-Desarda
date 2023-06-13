import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/models/tours.model';
import { ToursService } from 'src/app/services/tours.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(public toursService: ToursService, public router: Router){}
  mycards: Tour[] = [
  ]
     
  ngOnInit(): void {
    this.toursService.getTours().subscribe(response=>{
      console.log(response)
      this.mycards = response.items;
    })
  }

  showTours(){
    this.router.navigate(['/tours']);
  }

  

}
