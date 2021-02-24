import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/postInterface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  posts:Post={}
  constructor(private postService:PostService,private route:ActivatedRoute,private router:Router) { }
  id:string=this.route.snapshot.params.id
  getSinglePost(){
    this.postService.getٍSinglePosts(this.id).subscribe(
      (res)=>{
      this.posts=res
    },(error)=>{
      console.log(error)
    }
    );
  }

  updatePosts(post:Post){
    this.postService.updatePost(this.id,post).subscribe(()=>{})
  }




  back(){
    this.router.navigate(['/posts'])
  }
  ngOnInit(): void {
    this.getSinglePost()
  }

}
