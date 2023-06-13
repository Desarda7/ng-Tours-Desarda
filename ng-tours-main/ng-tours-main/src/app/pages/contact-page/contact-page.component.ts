import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/components/navbar.component';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { RouterModule,Router,} from '@angular/router';
import { ThankYouComponent } from './components/thank-you/thank-you.component';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, RouterModule,ThankYouComponent],
})
export class ContactPagesComponent {
  

  errorMessage = null;

  constructor(
    private http: HttpClient, 
    private fb: NonNullableFormBuilder, 
    public contactService: ContactService,
    private router: Router
  ) {}

  contactForm = this.fb.group({
    title: '',
    body: ['', [Validators.required, Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.email]],
  });

  //Template driven form
  //   firstInput: string = '';

  //    contactForm ={
  //     title:'',
  //     body:'',
  //     email:'',
  //    }

  // onSubmit(contactForm:any){
  //   console.log(contactForm);
  // }

  // }

  // export class contact{
  //   id?: number = Math.random();
  //   title:string;
  //   body:string;
  //   email:string;

  //   constructor(title:string, body:string, email:string){
  //     this.title=title;
  //     this.body=body;
  //     this.email=email;

  //   }

  // form = this.fb.group({
  //   title: this.fb.control('',[Validators.required, Validators.minLength(5)])
  // })



  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.contactService.createContact(this.contactForm.getRawValue()).pipe(take(1)).subscribe(
      { 
        next: 
        (res) => {
          console.log(res)
          this.router.navigate(['/thankyou']);
        },
        error: (err) => {
          this.errorMessage = err.message;
        }
      }
    )
  }
}

