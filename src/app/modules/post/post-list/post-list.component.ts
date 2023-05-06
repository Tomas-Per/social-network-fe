import { Component } from '@angular/core';
import { PostData } from 'src/app/core/models/postData';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  posts: PostData[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
