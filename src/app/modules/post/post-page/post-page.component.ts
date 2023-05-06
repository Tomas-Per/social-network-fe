import { Component } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent {
  post: Post = new Post();

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService
      .getPost('76e535e0-003d-44c0-9de8-47a430d36de8')
      .subscribe((postData: Post) => {
        console.log(postData);
        this.post = postData;
      });
  }
}
