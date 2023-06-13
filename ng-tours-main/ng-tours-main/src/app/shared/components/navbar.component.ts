import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="header inner-container">
      <div class="logo-div">
        <a href="#">
          <img
            class="logo"
            src="assets/images/logo.png"
            alt="Summer Exploring Logo"
          />
        </a>
      </div>
      <div class="nav-search">
        <nav class="navbar">
          <ul class="list">
            <li><a class="list-item" routerLink="/landing">Home</a></li>
            <li><a class="list-item" routerLink="/tours">Tours</a></li>
            <li><a class="list-item" routerLink="/">Our story</a></li>
            <li>
              <a class="list-item" routerLink="/contacti">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div class="search">
          <!-- <input type="text" class="search-text" /> -->
          <!-- <ion-icon class="ion-icon" name="search-outline"></ion-icon>  -->
          <!-- <ng-icon class="search-icon" name="ionSearchOutline"></ng-icon> -->
          <!-- <i class="icon ion-search-icon" name="search-outline"></i> -->
          <!-- <span class="ion ion-md-attach"></span> -->
         <a class="detailsBtn" routerLink="/login">&#124;&#8592; Admin Login</a>
        </div>
      </div>
    </div>
  `,
  styleUrls:['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, NgIconsModule, RouterModule],
  
})
export class NavbarComponent {}
