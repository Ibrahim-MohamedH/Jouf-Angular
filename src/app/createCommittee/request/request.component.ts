import { Component } from '@angular/core';
import { ComitteeRequests } from 'src/app/models/comitteeRequests';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent {
  request = new ComitteeRequests();
  constructor(private api: ApiFunctionServiceService) {}

  submit() {
    this.api
      .post('http://localhost:3000/requests', this.request)
      .subscribe((data) => {
        alert('data Entered Successfully');
      });
  }
}
