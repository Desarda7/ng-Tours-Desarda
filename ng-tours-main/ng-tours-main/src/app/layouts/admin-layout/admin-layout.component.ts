import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdmNavbarComponent } from 'src/app/pages/admin-page/components/adm-navbar/adm-navbar/adm-navbar.component';

@Component({
  selector: 'app-admin-layout',
  template: `<app-adm-navbar></app-adm-navbar>
  <router-outlet></router-outlet>`,
  styles: [''],
  standalone:true,
  imports:[RouterModule, AdmNavbarComponent]
})
export class AdminLayoutComponent {

}
