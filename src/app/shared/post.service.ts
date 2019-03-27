import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const dbUrl = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  
  postForm:FormGroup

  // @Output() onAdd = new EventEmitter

  constructor(private http:HttpClient) {
    this.postForm = new FormGroup({
      "id": new FormControl,
      "userId": new FormControl,
      "title": new FormControl('',Validators.required),
      "body": new FormControl('',Validators.required)
    })
  }

  fetchData():Observable<Post[]>{
    return this.http.get<Post[]>(dbUrl+'/posts')
  }

  addPost(post:Post){
    return this.http.post(dbUrl+'/posts',post)
  }

  populateForm(post:Post){
    this.postForm.setValue(post)
  }

  editPost(post:Post){
    return this.http.put(dbUrl+'/posts',post)
  }

  deletePost(post:Post){
    return this.http.delete(`${dbUrl}/posts/${post.id}`)
  }
}
