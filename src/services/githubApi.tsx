import { Octokit } from 'octokit';
import { GithubRepositoryType } from '../types/github.repository';

const repositoryData: GithubRepositoryType = {
  front: {
    repo: 'personal-blog-front',
    owner: 'wyvern800',
  },
  back: {
    repo: 'personal-blog-back',
    owner: 'Terrible-Developer',
  },
};

/**
 * Gets the github request for commits in front/backend repo
 * @param isFrontEnd If we're pulling front end commits or back end
 * @param perPage How many entries we're fetching per page.
 */
const getCommitsFromGithub = async (isFrontEnd: Boolean, perPage: number) => {
  const auth = isFrontEnd
    ? process.env.TOKEN_GITHUB
    : process.env.TOKEN_GITHUB_BACK;

  const octokit = new Octokit({
    auth,
  });

  return await octokit.request(
    `/repos/{owner}/{repo}/commits?per_page=${perPage}`,
    isFrontEnd ? repositoryData['front'] : repositoryData['back']
  );
};

export { getCommitsFromGithub, repositoryData };
