import { Component, OnInit} from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostsService }  from '../posts.service';
import { LoginService } from '../login.service';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

registerLocaleData(localeIt, 'it');

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postsservice: PostsService,
    private location: Location,
    private loginservice: LoginService
  ) {}

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postsservice.getPost(id)
      .subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.postsservice.updatePost(this.post)
      .subscribe(() => this.goBack());
  }

  delete(post: Post): void {
    this.postsservice.deletePost(post).subscribe();
    this.location.back();
  }
}
