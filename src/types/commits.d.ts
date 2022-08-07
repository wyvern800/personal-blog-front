export type CommitsType = {
  author: AuthorType;
  message: string;
  url: string;
};

export type AuthorType = {
  login: string;
  name: string;
  email: string;
  date: string;
  avatar_url: string;
};
