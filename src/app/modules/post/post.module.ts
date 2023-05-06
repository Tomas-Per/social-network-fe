import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPageComponent } from './post-page/post-page.component';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';

@NgModule({
  declarations: [PostPageComponent, CommentTreeComponent],
  imports: [CommonModule],
  exports: [PostPageComponent],
})
export class PostModule {}
