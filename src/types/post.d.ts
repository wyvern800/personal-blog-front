import TagType from './tag'

export type PostType = {
  id: string;
  title: string;
  content: string;
  tags?: TagType[];
  userid: number;
  likes?: number;
  dateInsert: Date;
  dateUpdate: Date;

} | undefined;
