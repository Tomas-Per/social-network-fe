import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { PostData } from '../models/postData';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  api_url = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) {}

  getPost(postID: string): Observable<Post> {
    return this.http.get<Post>(this.api_url + 'posts/' + postID);
  }

  getPosts(): Observable<PostData[]> {
    return this.http.get<PostData[]>(this.api_url + 'posts/');
  }
}
