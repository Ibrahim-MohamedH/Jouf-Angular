import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  message: string = '';
  register = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get firstName() {
    return this.register.get('firstName');
  }
  get lastName() {
    return this.register.get('lastName');
  }
  get username() {
    return this.register.get('username');
  }
  get email() {
    return this.register.get('email');
  }
  get password() {
    return this.register.get('password');
  }

  constructor(private api: ApiFunctionServiceService, private router: Router) {}
  submit() {
    if (this.register.valid) {
      this.api
        .post('http://localhost:3000/users', this.register?.value)
        .subscribe((res: any) => {
          if (res) {
            this.router.navigateByUrl('/login');
          } else {
            this.message = 'حدث خطأ! برجاء المحاولة مرة اخرى';
            setTimeout(() => {
              this.message = '';
            }, 5000);
          }
        });
    } else {
      this.message = 'يجب التأكد من صحة البيانات';
      setTimeout(() => {
        this.message = '';
      }, 5000);
    }
  }
}
