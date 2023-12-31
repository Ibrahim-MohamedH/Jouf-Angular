import { Component } from '@angular/core';
import { CouncilSettings } from 'src/app/models/councilSettings';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  council = new CouncilSettings();
  constructor(private api: ApiFunctionServiceService) {}

  submit() {
    this.api
      .post('http://localhost:3000/council', this.council)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
