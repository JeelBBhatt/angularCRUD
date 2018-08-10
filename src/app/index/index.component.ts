import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppServiceModule} from "../app.service.module";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  users: any;
  constructor(private http: HttpClient, private service: AppServiceModule) {}

  ngOnInit() {
   this.getUsers();
  }
  getUsers() {
  this.service.getUsers().subscribe(res => {
      this.users = res;
    });
  }
  deleteUser(id) {
    this.service.deleteUser(id).subscribe(res => {
      console.log('Deleted');
      this.getUsers();
    });
  }
}
