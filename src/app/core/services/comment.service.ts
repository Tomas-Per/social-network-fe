import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  api_url = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) {}

  voteOnComment(id: string, voteType: number) {
    let user_id = localStorage.getItem('user_id');
    const body = {
      vote_type: voteType,
      user: user_id,
      comment_id: id,
    };
    return this.http.post(this.api_url + 'posts/comment-votes/', body);
  }

  postComment(comment: any) {
    return this.http.post(this.api_url + 'posts/comments/', comment);
  }
}
