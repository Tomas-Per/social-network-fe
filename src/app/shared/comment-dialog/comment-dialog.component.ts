import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommentService } from 'src/app/core/services/comment.service';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss'],
})
export class CommentDialogComponent {
  content: string = '';
  remainingChars: number = 0;

  constructor(
    private dialogRef: MatDialogRef<CommentDialogComponent>,
    private commentService: CommentService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      post: string;
      parentComment?: string;
      created_by: number;
      updated_by: number;
    }
  ) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }

  createComment() {
    this.commentService
      .postComment({
        post: this.data.post,
        parent_comment: this.data.parentComment,
        content: this.content,
        created_by: this.data.created_by,
        updated_by: this.data.updated_by,
      })
      .subscribe((response) => {
        this.dialogRef.close();
        window.location.reload();
      });
  }

  valueChange(content: string) {
    this.remainingChars = 0 + content.length;
  }
}
