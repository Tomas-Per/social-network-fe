import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostData } from 'src/app/core/models/postData';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  posts: PostData[] = [];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.postService.getHotPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  goToPost(id: string) {
    this.router.navigate(['/post', id]);
  }

  voteOnPost(id: string, voteType: number) {
    this.postService.voteOnPost(id, voteType).subscribe((response) => {});
  }

  goToCommunity(id: string) {
    this.router.navigate(['/community', id]);
  }
}
