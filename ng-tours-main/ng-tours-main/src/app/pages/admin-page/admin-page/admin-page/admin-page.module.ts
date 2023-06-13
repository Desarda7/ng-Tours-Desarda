import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { AdmNavbarComponent } from '../../components/adm-navbar/adm-navbar/adm-navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar/sidebar.component';
import { ContentComponent } from '../../components/content/content/content.component';



@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdmNavbarComponent,
    SidebarComponent,
    ContentComponent
  ]
})
export class AdminPageModule { }
