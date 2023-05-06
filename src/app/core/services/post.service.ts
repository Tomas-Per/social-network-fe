import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  api_url = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) {}

  getPost(postID: string): Observable<Post> {
    return this.http.get<Post>(this.api_url + 'posts/' + postID);
  }
}
