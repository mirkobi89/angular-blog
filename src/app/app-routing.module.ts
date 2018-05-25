import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent }   from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { PostsDetailComponent} from './posts-detail/posts-detail.component';
import { NewPostComponent } from './new-post/new-post.component';
const routes : Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'detail/:id', component: PostsDetailComponent},
  { path: 'new', component: NewPostComponent}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}