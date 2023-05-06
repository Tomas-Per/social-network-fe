import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPageComponent } from './post-page/post-page.component';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [PostPageComponent, CommentTreeComponent, PostListComponent],
  imports: [CommonModule],
  exports: [PostPageComponent],
})
export class PostModule {}
