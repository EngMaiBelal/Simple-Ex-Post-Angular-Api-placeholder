import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/postInterface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // step1 --->url
  url="https://jsonplaceholder.typicode.com/posts/"


  constructor(private http:HttpClient ) { }
  // get all posts
  getPosts(){
    return this.http.get<Post[]>(this.url)
  }
  // get single post
  getٍSinglePosts(id:string){
    return this.http.get<Post>(this.url+id)
  }

  //add post 
  addPosts(post:Post){

    // ---->post(url like get,post(body))
    return this.http.post(this.url,post)

  }

  //delete single post
  deletePost(id:any){
    return this.http.delete(this.url+id)

  }

  //update data
  updatePost(id:string,post:Post){
    return this.http.patch(this.url+id,post)
  }

}
