import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommunityData } from '../models/community';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  api_url = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  getCommunities(): Observable<CommunityData[]> {
    return this.http.get<CommunityData[]>(this.api_url + 'communities/');
  }
}
