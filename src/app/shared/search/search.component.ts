import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(public searchService: SearchService, private router: Router) {}

  goToCommunityPosts(id: string) {
    this.router.navigate(['/community', id]);
  }

  goToPost(id: string) {
    this.router.navigate(['/post', id]);
  }
}
