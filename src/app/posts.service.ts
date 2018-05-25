import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable ,  of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostsService {
  
  private postsUrl = 'api/posts';  // URL to web api
  posts = [];
  
  constructor(private http: HttpClient) { }

  /** GET posts from the server */
  getPosts (): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  /** PUT: update the post on the server */
  updatePost (post: Post): Observable<any> {
    return this.http.put(this.postsUrl, post, httpOptions);
  }

  /** POST: add a new post to the server */
  addPost (post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }
  /** DELETE: delete the post from the server */
  deletePost (post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions);
  }
}
