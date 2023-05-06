import { Component, Input } from '@angular/core';
import { CommentData } from 'src/app/core/models/comment';
@Component({
  selector: 'app-comment-tree',
  templateUrl: './comment-tree.component.html',
  styleUrls: ['./comment-tree.component.scss'],
})
export class CommentTreeComponent {
  @Input() comments: CommentData[] = new Array<CommentData>();
  @Input() depth: number = 0;

  getIndent(depth: number): string {
    return `${depth * 10}px`; // adjust the indent size as needed
  }
}
