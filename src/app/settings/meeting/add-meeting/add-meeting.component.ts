import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Meetings } from 'src/app/models/meetings';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css'],
})
export class AddMeetingComponent {
  displayedColumns: string[] = [
    'checkbox',
    'rank',
    'vote',
    'name',
    'authorization',
    'position',
    'username',
    'email',
    'phone',
  ];
  firstTable: number = 0;
  dataSource!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  meeting = new Meetings();
  constructor(private api: ApiFunctionServiceService) {
    this.api.get('http://localhost:3000/users').subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.firstTable = this.dataSource.data.length;
    });
  }

  submit() {
    this.api
      .post('http://localhost:3000/meetings', this.meeting)
      .subscribe((data: any) => {});
  }
}
