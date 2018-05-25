import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginService } from './login.service';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { PostsService } from './posts.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LoginComponent,
    PostsDetailComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [LoginService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
