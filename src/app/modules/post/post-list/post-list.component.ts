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
    this.postService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
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
