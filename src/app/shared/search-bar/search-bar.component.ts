import { Component } from '@angular/core';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchText!: string;
  searchType!: string;
  council!: string;
  fromDate!: string;
  toDate!: string;
  message = '';

  constructor(private api: ApiFunctionServiceService) {}

  search() {
    if (
      this.searchText.trim() == '' &&
      this.searchType.trim() == '' &&
      this.fromDate.trim() == '' &&
      this.toDate.trim() == '' &&
      this.council.trim() == ''
    ) {
      this.message = 'برجاء ادخال كافة الحقول للبحث';
    } else {
      this.api
        .get(
          `http://localhost:3000/meetings?searchText=${this.searchText}&searchType=${this.searchType}&name=${this.council}&fromDate=${this.fromDate}&toDate=${this.toDate}`
        )
        .subscribe((data: any) => {
          console.log(data);
        });
    }
  }
  clearInputs() {
    this.searchText = '';
    this.searchType = '';
    this.council = '';
    this.fromDate = '';
    this.toDate = '';
  }
}
