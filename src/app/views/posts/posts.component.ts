import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/postInterface';
import { PostService } from './../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService:PostService,private route:ActivatedRoute) { }
  posts:Post[]=[]

  getPosts(){
    this.postService.getPosts().subscribe((res)=>{
      this.posts=res
    },(error)=>{
      console.log(error)
    })
  }



 addPost(posts:Post){
  //  ----> not need res
   this.postService.addPosts(posts).subscribe(()=>{
    // this.posts.push(posts)   ---> add in the end
    this.posts.splice(0,0,posts)  // add in the top
   })
 } 


  deletePost(post:Post){
      this.postService.deletePost(post.id).subscribe(()=>{
       let index=this.posts.indexOf(post)
       this.posts.splice(index,1)
      })
  }

  ngOnInit(): void {
    this.getPosts()
  }

}
