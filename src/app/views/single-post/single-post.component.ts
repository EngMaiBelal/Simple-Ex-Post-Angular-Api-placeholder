import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/postInterface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {


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
  back(){
    this.router.navigate(['/posts'])
  }
  ngOnInit(): void {
    this.getSinglePost()
  }

}
