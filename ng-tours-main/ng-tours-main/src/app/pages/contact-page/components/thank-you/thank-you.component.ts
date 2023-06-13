import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import { NavbarComponent } from 'src/app/shared/components/navbar.component';


@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
  standalone:true,
  imports: [CommonModule, NgIconsModule, RouterModule,NavbarComponent],
})
export class ThankYouComponent {
  constructor(private router: Router){}
 
  backBtn(){
    this.router.navigate(['/contacti']);

  }
}
