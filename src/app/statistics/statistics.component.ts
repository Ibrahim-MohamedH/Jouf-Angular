import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiFunctionServiceService } from '../services/api-function-service.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  displayedColumns: string[] = ['id', 'name', 'Count'];

  firstTable: number = 0;
  dataSource!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  toDate!: string;
  fromDate!: string;

  constructor(private api: ApiFunctionServiceService) {
    this.api.get('http://localhost:3000/stats').subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.firstTable = this.dataSource.data.length;
    });
  }

  submit() {
    this.api
      .get(
        `http://localhost:3000/stats?fromDate=${this.fromDate}&toDate=${this.toDate}`
      )
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  clearInput() {
    this.toDate = '';
    this.fromDate = '';
  }
}
