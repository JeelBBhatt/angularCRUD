import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {IndexComponent} from "./index/index.component";


export const appRoutes: Routes = [
  { path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { path: 'index',
    component: IndexComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
})
export class AppRouterModule{
}
