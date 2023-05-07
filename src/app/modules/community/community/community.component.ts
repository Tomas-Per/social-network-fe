import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostData } from 'src/app/core/models/postData';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent {
  posts: PostData[] = [];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id')!;
      console.log(id);
      this.postService.getCommunityPosts(id).subscribe((posts) => {
        console.log(posts);
        this.posts = posts;
      });
    });
  }

  goToPost(id: string) {
    this.router.navigate(['/post', id]);
  }

  upvotePost(id: string) {
    this.postService.upvotePost(id).subscribe((response) => {});
  }

  downvotePost(id: string) {
    this.postService.downvotePost(id).subscribe((response) => {});
  }
}
