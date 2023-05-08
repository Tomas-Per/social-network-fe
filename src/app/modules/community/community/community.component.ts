import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunityData } from 'src/app/core/models/community';
import { PostData } from 'src/app/core/models/postData';
import { CommunityService } from 'src/app/core/services/community.service';
import { PostService } from 'src/app/core/services/post.service';
import { PostDialogComponent } from 'src/app/shared/post-dialog/post-dialog.component';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent {
  posts: PostData[] = [];
  communityId: string = '';
  community: CommunityData = {} as CommunityData;
  selectedVal: string = '';

  constructor(
    private postService: PostService,
    private communityService: CommunityService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.selectedVal = 'new';
    this.route.paramMap.subscribe((params) => {
      this.communityId = params.get('id')!;
      this.postService.getNewPosts(this.communityId).subscribe((posts) => {
        this.posts = posts;
      });

      this.communityService
        .getCommunity(this.communityId)
        .subscribe((community) => {
          this.community = community;
        });
    });
  }

  goToPost(id: string) {
    this.router.navigate(['/post', id]);
  }

  voteOnPost(id: string, voteType: number) {
    this.postService.voteOnPost(id, voteType).subscribe((response) => {});
  }

  onValChange(val: string) {
    this.selectedVal = val;
  }

  getHotPosts() {
    this.postService.getHotPosts(this.communityId).subscribe((posts) => {
      this.posts = posts;
    });
  }

  getNewPosts() {
    this.postService.getNewPosts(this.communityId).subscribe((posts) => {
      this.posts = posts;
    });
  }

  getTopPosts() {
    this.postService.getTopPosts(this.communityId).subscribe((posts) => {
      this.posts = posts;
    });
  }

  openPostDialog() {
    this.dialog.open(PostDialogComponent, {
      width: '500px',
      height: '400px',
      data: {
        community: this.communityId,
        created_by: localStorage.getItem('user_id'),
        updated_by: localStorage.getItem('user_id'),
      },
    });
  }
}
