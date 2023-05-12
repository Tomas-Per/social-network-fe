import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommunityData } from 'src/app/core/models/community';
import { CommunityService } from 'src/app/core/services/community.service';
import { CommunityDialogComponent } from 'src/app/shared/community-dialog/community-dialog.component';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.scss'],
})
export class CommunityListComponent {
  communities: CommunityData[] = [];

  constructor(
    private communityService: CommunityService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.communityService.getCommunities().subscribe((communities) => {
      this.communities = communities;
    });
  }

  goToCommunityPosts(id: string) {
    this.router.navigate(['/community', id]);
  }

  openCommunityDialog() {
    this.dialog.open(CommunityDialogComponent, {
      width: '500px',
      height: '420px',
      data: {
        created_by: localStorage.getItem('user_id'),
        updated_by: localStorage.getItem('user_id'),
      },
    });
  }
}
