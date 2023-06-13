import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Tour } from 'src/app/models/tours.model';
import { ToursService } from 'src/app/services/tours.service';
import { take } from 'rxjs'


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  standalone:true,
  imports:[RouterModule]
})
export class ContentComponent {
constructor(public router:Router, private activatedRoute: ActivatedRoute,
  public toursService:ToursService){ }

  @Input() table: Tour[]=[];

  // loadTable(payload:any){
  //   this.toursService.getAllTours(payload).pipe(take(1)).subscribe(response=>{
  //    this.mytable = response.items
  //   })
  }

  

