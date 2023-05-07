import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityData } from 'src/app/core/models/community';
import { CommunityService } from 'src/app/core/services/community.service';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.scss'],
})
export class CommunityListComponent {
  communities: CommunityData[] = [];

  constructor(
    private communityService: CommunityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.communityService.getCommunities().subscribe((communities) => {
      console.log(communities);
      this.communities = communities;
    });
  }

  goToCommunityPosts(id: string) {
    this.router.navigate(['/community', id]);
  }
}
