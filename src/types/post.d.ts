import TagType from './tag';

export type PostType = {
  id?: string;
  title: string;
  slug: string;
  content: string;
  tags?: TagType[];
  userid: number;
  likes_quantity?: number;
  post_comments_id?: number;
  created_at?: Date;
  updated_at?: Date;
};
