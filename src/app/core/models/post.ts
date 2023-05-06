import { CommentData } from './comment';

export class Post {
  comments: CommentData[] = [];
  community: string = '';
  content: string = '';
  created_at: string = '';
  created_by: number = 0;
  id: string = '';
  title: string = '';
  updated_at: string = '';
  updated_by: number = 0;
  url: string = '';
  vote_count: number = 0;
  author_username: string = '';
}
