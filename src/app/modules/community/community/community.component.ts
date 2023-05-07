import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
    private route: ActivatedRoute
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
}
