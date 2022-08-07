export type Collaborator = {
  name: string;
  effectPhrase: string;
  about: string;
  avatar: any;
  skills: string[];
  socials: Socials[];
};

export type Socials = {
  name: string;
  link: string;
};
