import { Component } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quinones-Final-Assessment';

  // readonly dbUrl:string = "https://jsonplaceholder.typicode.com"
  // users:Observable<User[]>;

  // constructor( private http:HttpClient) { }

  // ngOnInit() {
  //   this.users = this.http.get<User[]>(this.dbUrl + '/users')
  // }
}
