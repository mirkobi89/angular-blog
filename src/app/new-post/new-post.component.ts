import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postsservice: PostsService) { }

  ngOnInit() {
  }

  save(titolo: string, contenuto: string): void {
    titolo = titolo.trim();
    contenuto = contenuto.trim();
    let autore = 'Admin';
    let data = Date.now();
    if (!titolo) { return; }
    if (!contenuto) { return; }
    this.postsservice.addPost({ titolo,autore,data,contenuto } as Post)
      .subscribe(post => {
        this.postsservice.posts.push(post);
      });
  }
}
