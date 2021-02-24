import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { AnimationDefaultComponent } from './views/animation-default/animation-default.component';
import { HomeComponent } from './views/home/home.component';
import { PostsComponent } from './views/posts/posts.component';
import { SinglePostComponent } from './views/single-post/single-post.component';
import { UpdatePostComponent } from './views/update-post/update-post.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'posts',component:PostsComponent},
  {path:'animationDefault',component:AnimationDefaultComponent},
  {path:'singlePost/:id',component:SinglePostComponent}, // --->route node by id
  {path:'updatePost/:id',component:UpdatePostComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
