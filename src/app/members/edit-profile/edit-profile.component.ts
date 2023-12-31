import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  id!: any;
  user = new Users();
  message = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiFunctionServiceService,
    private router: Router
  ) {
    this.id = activatedRoute.snapshot.paramMap.get('id');
    this.api
      .getById('http://localhost:3000/users', this.id)
      .subscribe((data: any) => {
        this.user = data;
      });
  }

  updateUser() {
    this.api
      .put('http://localhost:3000/users', this.id, this.user)
      .subscribe((data) => {
        this.message = 'profile Updated Successfully';
        setTimeout(() => {
          this.router.navigateByUrl('/list_members');
        }, 1500);
      });
  }
}
