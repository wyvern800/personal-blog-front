import TagType from './tag'

export type PostType = {
  id: string;
  title: string;
  content: string;
  tags?: TagType[];
  userid: number;
  likes_quantity?: number;
  created_at?: Date;
  updated_at?: Date;
};
