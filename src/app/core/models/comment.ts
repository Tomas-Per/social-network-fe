export class CommentData {
  content: string = '';
  created_at: string = '';
  created_by: number = 0;
  id: string = '';
  parent_comment: string = '';
  post: string = '';
  replies: CommentData[] = [];
  updated_at: string = '';
  updated_by: number = 0;
  vote_count: number = 0;
  author_username: string = '';
}
