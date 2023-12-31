import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Meetings } from 'src/app/models/meetings';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-meeting-location',
  templateUrl: './meeting-location.component.html',
  styleUrls: ['./meeting-location.component.css'],
})
export class MeetingLocationComponent {
  displayedColumns: string[] = [
    'name',
    'code',
    'date',
    'startTime',
    'endTime',
    'location',
    'virtual',
  ];
  firstTable: number = 0;
  dataSource!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  meeting = new Meetings();
  constructor(private api: ApiFunctionServiceService) {
    this.api.get('http://localhost:3000/meetings').subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.firstTable = this.dataSource.data.length;
    });
  }
}
