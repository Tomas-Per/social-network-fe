import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommunityData } from '../models/community';
import { PostData } from '../models/postData';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  api_url = 'http://localhost:8000/api/';
  searchData: { posts: PostData[]; communities: CommunityData[] } = {
    posts: [],
    communities: [],
  };
  constructor(private http: HttpClient) {}

  search(searchTerm: string) {
    this.http
      .get<PostData[]>(this.api_url + 'posts/?full_text_search=' + searchTerm)
      .subscribe((response) => {
        this.searchData.posts = response;
      });
    this.http
      .get<CommunityData[]>(
        this.api_url + 'communities/?full_text_search=' + searchTerm
      )
      .subscribe((response) => {
        this.searchData.communities = response;
      });
    return this.searchData;
  }
}
