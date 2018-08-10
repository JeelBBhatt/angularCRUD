import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AppServiceModule} from "../app.service.module";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: any;
  angForm: FormGroup;
  title = 'Edit Coin';
  constructor(private route: ActivatedRoute, private service: AppServiceModule, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  updateCoin(name, password) {
    this.route.params.subscribe(params => {
      this.service.updateUser(name, password, params['id']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.service.editUser(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }
}
