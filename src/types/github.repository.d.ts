export type OctokitAuthType = {
  repo: string;
  owner: string;
};

export type GithubRepositoryType = {
  [key: string]: OctokitAuthType;
};
