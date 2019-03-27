import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const dbUrl:string = 'https://jsonplaceholder.typicode.com'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  users:Observable<User[]>;
  userForm:FormGroup

  constructor(private http:HttpClient) {
    this.userForm = new FormGroup({
      'id': new FormControl,
      'name' : new FormControl('',Validators.required),
      'username': new FormControl('',Validators.required),
      'email' : new FormControl('',[Validators.required,Validators.email])
    })
  }

  fetchData():Observable<User[]>{
    return this.http.get<User[]>(dbUrl+'/users')
  }

  addUser(user:User){
    return this.http.post(dbUrl+'/users',user)
  }

  populateForm(user:User){
    this.userForm.setValue(user)
  }

  editUser(user:User){
    return this.http.put(`${dbUrl}/users/${user.id}`,user)
  }

  deleteUser(user:User){
    return this.http.delete(`${dbUrl}/users/${user.id}`)
  }
}
