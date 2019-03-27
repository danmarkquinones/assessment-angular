import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { Post } from 'src/app/shared/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postForm=this.postService.postForm
  post;

  @Output() postCreated: EventEmitter<Post> = new EventEmitter();
  // @Input() post
  
  constructor(private postService:PostService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.postForm.get('id') != null){
      this.postService.addPost(this.postForm.value).subscribe(
        post => {
          this.post = post
          console.log(post),
          this.postCreated.emit(this.post),
          this.postForm.reset()
        })
    }else{

    }
  }   
}
