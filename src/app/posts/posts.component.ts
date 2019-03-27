import { Component, OnInit, Output, Input } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService:PostService) { }
  @Input() post;
  posts:Post[]

  ngOnInit() {
    this.postService.fetchData().subscribe(
      data => {this.posts = data;}
    )
    
  }

  onEdit(post:Post){
    this.postService.populateForm(post)
  }


  onPostAdded(postData:Post){
    this.posts.push({
      id:postData.id,
      title:postData.title,
      body:postData.body
    })
    console.log(this.posts)
  }

  onDelete(post:Post){
    this.postService.deletePost(post).subscribe(
      ()=>{
        console.log(this.posts.length)
        this.posts.forEach(
          (cur,index)=>{
            if(post.id === cur.id){
              this.posts.splice(index,1)
            }
          }
        )
      }
    )
  }
}
