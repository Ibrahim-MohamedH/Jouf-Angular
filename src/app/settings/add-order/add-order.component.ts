import { Component } from '@angular/core';
import { AddOrder } from 'src/app/models/addOrder';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent {
  order = new AddOrder();
  constructor(private api: ApiFunctionServiceService) {}

  submit() {
    this.api
      .post('http://localhost:3000/orders', this.order)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
