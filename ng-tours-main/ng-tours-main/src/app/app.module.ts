import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { ToursPageModule } from './pages/tours-page/tours-page.module';
import { TourDetailsComponent } from './pages/tour-details/tour-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './pages/login/authconfig.interceptor';
import { AdminPageModule } from './pages/admin-page/admin-page/admin-page/admin-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
      


    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LandingPageModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToursPageModule,
        FontAwesomeModule,
        AdminPageModule,
        BrowserAnimationsModule,
       
        
    ],
    providers:[
        {
            provide:HTTP_INTERCEPTORS,
            useClass:AuthInterceptor,
            multi:true
        }
    ]
})
export class AppModule {}
