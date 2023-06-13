import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/login/auth.service';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/app/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{ 
  loginForm: FormGroup;

constructor( private fb:NonNullableFormBuilder, private authService:AuthService, private router: Router,
  private http:HttpClient){
  this.loginForm = this.fb.group({ 
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
  }); 
}
ngOnInit(): void {

}
// login(password:string){
//   this.authService.login(password).pipe(take(1)).subscribe((res)=>{
//     this.router.navigateByUrl('/landing')
//   })
// } 
onSubmit(data:any){
  this.authService.login(this.loginForm.value).subscribe((res:any) => {
    if (res.result) {
      this.loginForm.reset();
      this.router.navigate(['landing']);
    }
  });
}
}


