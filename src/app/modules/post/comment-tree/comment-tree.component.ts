import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentData } from 'src/app/core/models/comment';
import { CommentService } from 'src/app/core/services/comment.service';
import { CommentDialogComponent } from 'src/app/shared/comment-dialog/comment-dialog.component';
@Component({
  selector: 'app-comment-tree',
  templateUrl: './comment-tree.component.html',
  styleUrls: ['./comment-tree.component.scss'],
})
export class CommentTreeComponent {
  @Input() comments: CommentData[] = new Array<CommentData>();
  @Input() depth: number = 0;

  constructor(
    private commentService: CommentService,
    private dialog: MatDialog
  ) {}

  getIndent(depth: number): string {
    return `${depth * 20}px`;
  }

  voteOnComment(id: string, voteType: number) {
    this.commentService.voteOnComment(id, voteType).subscribe((response) => {});
  }

  openCommentDialog(post: string, parentComment: string) {
    this.dialog.open(CommentDialogComponent, {
      width: '500px',
      height: '350px',
      data: {
        post: post,
        parentComment: parentComment,
        created_by: localStorage.getItem('user_id'),
        updated_by: localStorage.getItem('user_id'),
      },
    });
  }
}
