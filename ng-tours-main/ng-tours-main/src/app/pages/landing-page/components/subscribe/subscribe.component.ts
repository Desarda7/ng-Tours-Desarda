import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { SubscribersService } from 'src/app/services/subscribers.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  errorMsg=null;
  showMessage=false;
  constructor(private fb: NonNullableFormBuilder, public subscribersService: SubscribersService,
    private router: Router){}

  subscribersForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  }); 

  subscribe(){
    if (this.subscribersForm.invalid) {
          this.subscribersForm.markAllAsTouched();
          return;
        
        }
        this.subscribersService.createSubscriber(this.subscribersForm.getRawValue()).pipe(take(1)).subscribe(
          {
            next:
            (res)=>{
              console.log(res)
            this.showMessage=true;
            this.subscribersForm.reset()
            },
            error:(err)=>{
              this.errorMsg=err.message;
            }
          }
        )
    
  }
}
