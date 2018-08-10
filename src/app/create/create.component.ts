import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppServiceModule} from "../app.service.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'Add Coin';
  angForm: FormGroup;
  constructor(private userService: AppServiceModule, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }
  addCoin(name, password) {
    this.userService.addUser(name, password);
  }
  ngOnInit() {
  }
}
