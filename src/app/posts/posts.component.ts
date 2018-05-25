import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostsService} from '../posts.service';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

registerLocaleData(localeIt, 'it');

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private loginservice: LoginService,
              private location: Location,
              private postsservice: PostsService) {}
  posts: Post[];
  postDetail(id: number){}
  
  ngOnInit() {
    this.getPosts();
  }

 getPosts(): void {
    
   this.postsservice.getPosts()
   .subscribe(posts=>{
        this.posts=posts;
        this.posts.sort(function(a,b){
          return b.data - a.data;
        });
    });

 }

 

}
