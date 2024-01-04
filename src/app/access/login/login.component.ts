import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  message: string = '';
  login = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.login.get('email');
  }
  get password() {
    return this.login.get('password');
  }
  constructor(private api: ApiFunctionServiceService, private router: Router) {}

  submit() {
    if (this.login.valid) {
      this.api.get('http://localhost:3000/users').subscribe((res: any) => {
        let user = res.find((data: any) => {
          return (
            data.email == this.email?.value && data.rank == this.password?.value
          );
        });
        if (user) {
          this.router.navigateByUrl('/');
        } else {
          this.message =
            'البريد الالكتروني او كلمة السر غير صحيحين! برجاء المحاولة مرة اخرى';
          setTimeout(() => {
            this.message = '';
          }, 5000);
        }
      });
    }
  }
}
