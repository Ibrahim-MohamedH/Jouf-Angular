import { Component } from '@angular/core';
import { Location } from 'src/app/models/location';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
})
export class AddLocationComponent {
  newLocation = new Location();
  constructor(private api: ApiFunctionServiceService) {}

  submit() {
    this.api
      .post('http://localhost:3000/locations', this.newLocation)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
