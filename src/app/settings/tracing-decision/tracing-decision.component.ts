import { Component } from '@angular/core';
import { Decisions } from 'src/app/models/decisions';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-tracing-decision',
  templateUrl: './tracing-decision.component.html',
  styleUrls: ['./tracing-decision.component.css'],
})
export class TracingDecisionComponent {
  decision = new Decisions();
  displayedColumns: string[] = [
    'id',
    'meeting',
    'subject',
    'decision',
    'administrator',
    'date',
    'rate',
  ];

  firstTable: number = 0;
  dataSource!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private api: ApiFunctionServiceService) {
    this.api.get('http://localhost:3000/decisions').subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.firstTable = this.dataSource.data.length;
    });
  }

  submit() {
    this.api
      .post('http://localhost:3000/decisions', this.decision)
      .subscribe((data) => {
        console.log(data);
      });
  }
  clearInputs() {
    this.decision = new Decisions();
  }
}
