import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { ApiFunctionServiceService } from 'src/app/services/api-function-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  displayedColumns: string[] = [
    'checkbox',
    'id',
    'name',
    'authorization',
    'position',
    'email',
    'phone',
    'edit',
    'delete',
  ];

  firstTable: number = 0;
  dataSource!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  user = new Users();
  message = '';
  constructor(private api: ApiFunctionServiceService, private router: Router) {
    this.api.get('http://localhost:3000/users').subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.firstTable = this.dataSource.data.length;
    });
  }
  submit() {
    this.user.authorization = this.user.position;
    this.api
      .post('http://localhost:3000/users', this.user)
      .subscribe((data: any) => {
        this.message = 'profile Updated Successfully';
        setTimeout(() => {
          this.message = '';
          location.reload();
        }, 1500);
      });
  }
  remove(id: any) {
    this.api
      .delete('http://localhost:3000/users', id)
      .subscribe((data: any) => {
        location.reload();
      });
  }
}
