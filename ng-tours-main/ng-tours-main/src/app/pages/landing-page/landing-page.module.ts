import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { PromoComponent } from './components/promo/promo.component';
import { HikingComponent } from './components/hiking/hiking.component';
import { ExploreComponent } from './components/explore/explore.component';
import { QuoteComponent } from './components/quote/quote.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { NgIconsModule } from '@ng-icons/core';
import { ionSearchOutline } from '@ng-icons/ionicons';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/shared/components/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LandingPageComponent,
    FirstPageComponent,
    PromoComponent,
    HikingComponent,
    ExploreComponent,
    QuoteComponent,
    SubscribeComponent,
   
  ],
  imports: [CommonModule, NgIconsModule.withIcons({ ionSearchOutline }), RouterModule, NavbarComponent,CardsComponent,
  ReactiveFormsModule],
 
})
export class LandingPageModule {}
