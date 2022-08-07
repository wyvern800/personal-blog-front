import { Octokit } from 'octokit';

const repo = "personal-blog"

const octokit = new Octokit({
  auth: process.env.TOKEN_GITHUB,
});


/**
 * Gets the github request for front repo
 */
const requestFront = async () => {
  return await octokit.request('/repos/{owner}/{repo}/commits?per_page=10', {
    owner: 'wyvern800',
    repo: `${repo}-front`,
  });
};

/**
 * Gets the github request for back repo
 */
const requestBack = async () => {
  return await octokit.request('/repos/{owner}/{repo}/commits?per_page=10', {
    owner: 'Terrible-Developer',
    repo: `${repo}-back`,
  });
};

export {
  requestFront,
  requestBack,
};
