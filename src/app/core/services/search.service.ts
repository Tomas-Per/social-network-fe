import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommunityData } from '../models/community';
import { PostData } from '../models/postData';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  api_url = 'http://localhost:8000/api/';
  search_data: { posts: PostData[]; communities: CommunityData[] } = {
    posts: [],
    communities: [],
  };
  constructor(private http: HttpClient) {}

  search(searchTerm: string) {
    this.http
      .get<PostData[]>(this.api_url + 'posts/?full_text_search=' + searchTerm)
      .subscribe((response) => {
        this.search_data.posts = response;
      });
    this.http
      .get<CommunityData[]>(
        this.api_url + 'communities/?full_text_search=' + searchTerm
      )
      .subscribe((response) => {
        this.search_data.communities = response;
      });
    return this.search_data;
  }
}
