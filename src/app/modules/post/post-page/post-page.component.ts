import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/models/post';
import { PostService } from 'src/app/core/services/post.service';
import { CommentDialogComponent } from 'src/app/shared/comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent {
  post: Post = new Post();

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id')!;
      this.postService.getPost(id).subscribe((post) => {
        this.post = post;
      });
    });
  }

  voteOnPost(id: string, voteType: number) {
    this.postService.voteOnPost(id, voteType).subscribe((response) => {});
  }

  openCommentDialog() {
    this.dialog.open(CommentDialogComponent, {
      width: '500px',
      height: '350px',
      data: {
        post: this.post.id,
        parentComment: null,
        created_by: localStorage.getItem('user_id'),
        updated_by: localStorage.getItem('user_id'),
      },
    });
  }
}
