import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getCommunityPosts(communityID: string): Observable<PostData[]> {
    const options = { params: new HttpParams().set('community', communityID) };

    return this.http.get<PostData[]>(this.api_url + 'posts/', options);
  }

  getTopPosts(communityID: string): Observable<PostData[]> {
    const options = { params: new HttpParams().set('order', '-vote_count') };
    if (communityID) {
      options.params = options.params.set('community', communityID);
    }

    return this.http.get<PostData[]>(this.api_url + 'posts/', options);
  }

  getNewPosts(communityID: string): Observable<PostData[]> {
    const options = { params: new HttpParams().set('order', '-created_at') };
    if (communityID) {
      options.params = options.params.set('community', communityID);
    }

    return this.http.get<PostData[]>(this.api_url + 'posts/', options);
  }
}
