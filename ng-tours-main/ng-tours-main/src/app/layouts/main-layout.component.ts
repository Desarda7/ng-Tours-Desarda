import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/shared/components/navbar.component';
import { AboutUsComponent } from '../pages/landing-page/components/about-us/about-us.component';

@Component({
  selector: 'app-main-layout',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-about-us></app-about-us>
  `,
  styles: [`
    app-navbar {
      background: red;
    }
  `],
  standalone: true,
  imports: [RouterModule, NavbarComponent,AboutUsComponent],
})
export class MainLayoutComponent {}
