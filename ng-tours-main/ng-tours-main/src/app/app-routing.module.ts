import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout.component';
import { ThankYouComponent } from './pages/contact-page/components/thank-you/thank-you.component';
import { ContactPagesComponent } from './pages/contact-page/contact-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthGuard } from './pages/login/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { TourDetailsComponent } from './pages/tour-details/tour-details.component';
import { ToursPageComponent } from './pages/tours-page/tours-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page/admin-page/admin-page.component';


import { NavbarComponent } from './shared/components/navbar.component';


export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'contacti',
        component: ContactPagesComponent,
      },
      {
         path: 'landing',
        component: LandingPageComponent,
      },
      {
        path:'thankyou',
        component:ThankYouComponent,
      },
      {
        path:'tours',
        component:ToursPageComponent,
      },
      {
        path:'tours/:id',
        component:TourDetailsComponent,    
      }
      
    ]
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path:'admin',
    component:AdminPageComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
