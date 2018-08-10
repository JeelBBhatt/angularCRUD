import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {RouterModule} from "@angular/router";
import {AppRouterModule} from "./app-router.module";
import {HttpClientModule} from "@angular/common/http";
import {AppServiceModule} from "./app.service.module";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [AppServiceModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
