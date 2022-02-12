export type PostType = {
  id: string;
  title: string;
  content: string;
  tags?: string;
  author: string;
  likes?: number;
  dateInsert: Date;
  dateUpdate: Date;
}
