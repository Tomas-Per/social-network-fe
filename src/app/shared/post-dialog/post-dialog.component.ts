import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.scss'],
})
export class PostDialogComponent {
  title: string = '';
  content: string = '';

  constructor(
    private dialogRef: MatDialogRef<PostDialogComponent>,
    private postService: PostService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA)
    public data: { community: string; created_by: number; updated_by: number }
  ) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }

  createPost() {
    this.postService
      .createPost({
        title: this.title,
        content: this.content,
        community: this.data.community,
        created_by: this.data.created_by,
        updated_by: this.data.updated_by,
      })
      .subscribe((response) => {
        this.dialogRef.close();
        window.location.reload();
      });
  }
}
