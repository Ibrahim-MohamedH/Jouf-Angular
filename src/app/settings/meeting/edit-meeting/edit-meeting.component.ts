import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Meetings } from 'src/app/models/meetings';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css'],
})
export class EditMeetingComponent {
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
  meetingSearch!: string;
  meetingtime!: string;
  meetingDate!: string;
  message: string = '';
  meeting = new Meetings();
  constructor(private api: ApiFunctionServiceService) {
    this.api.get('http://localhost:3000/meetings').subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.firstTable = this.dataSource.data.length;
    });
  }
  search() {
    if (
      this.meetingSearch.trim() == '' &&
      this.meetingDate.trim() == '' &&
      this.meetingtime.trim() == ''
    ) {
      this.message = 'برجاء ادخال كافة الحقول للبحث';
    } else {
      this.api
        .get(
          `http://localhost:3000/meetings?name=${this.meetingSearch}&date=${this.meetingDate}&startTime=${this.meetingtime}`
        )
        .subscribe((data) => {
          this.dataSource = new MatTableDataSource<any>(data);
          this.dataSource.paginator = this.paginator;
          this.firstTable = this.dataSource.data.length;
        });
    }
  }
  clearInputs() {
    this.meetingSearch = '';
    this.meetingDate = '';
    this.meetingtime = '';
  }
}
