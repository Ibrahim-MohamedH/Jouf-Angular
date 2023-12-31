import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  id!: any;
  user = new Users();
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiFunctionServiceService
  ) {
    this.id = activatedRoute.snapshot.paramMap.get('id');
    this.api
      .getById('http://localhost:3000/users', this.id)
      .subscribe((data: any) => {
        this.user = data;
      });
  }
}
