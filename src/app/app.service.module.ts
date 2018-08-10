import {AppModule} from "./app.module";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
@NgModule({
  imports: [
    AppModule
  ],
  bootstrap: [AppComponent]
})
export class AppServiceModule {
  constructor(private http: HttpClient,private router: Router) { }

  addUser(name, password) {
    const uri = 'http://localhost:4500/users/add';
    const obj = {
      name: name,
      password: password
    };
    this.http.post(uri, obj)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['index']);
        }
        console.log('Done');
      });
  }
  getUsers() {
    const uri = 'http://localhost:4500/users';
    return this
      .http
      .get(uri)
      .map(res => {
        console.log(res);
        return res;
      });
  }
  editUser(id) {
    const uri = 'http://localhost:4500/users/edit/' + id;
    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }
  updateUser(name, password, id) {
    const uri = 'http://localhost:4500/users/update/' + id;
    const obj = {
      name: name,
      password: password
    };
    this
      .http
      .post(uri, obj)
      .subscribe((res) => {
      if (res) {
        this.router.navigate(['index']);
      }
      console.log('Done');
        });
  }
  deleteUser(id) {
    const uri = 'http://localhost:4500/users/delete/' + id;
    return this
      .http
      .get(uri)
      .map(res => {
        return res;
      });
  }
}
