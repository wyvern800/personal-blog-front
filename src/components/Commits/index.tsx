import React, { useEffect, useState } from 'react';
import { getCommitsFromGithub, repositoryData } from '../../services/githubApi';
import {
  Wrapper,
  Link,
  AuthorImg,
  Commit,
  Repository,
  DateBox,
  Date,
  Card,
  GitProfileLink,
} from './styles';
import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { CommitsType } from '../../types/commits';
import { RepositoryCardProps } from '../../types/repository.card';

const Commits = () => {
  const [commitsFront, setCommitsFront] = useState<CommitsType[]>();
  const [commitsBack, setCommitsBack] = useState<CommitsType[]>();

  /**
   * Parses commit to save in our state, cause github object is huge as fk
   * @param dataCommit Commit data from github
   * @returns Returns parsed commit to save in our state
   */
  const getParsedCommit = (dataCommit: any) => {
    const parsedCommit: CommitsType = {
      author: {
        login: dataCommit.author.login,
        name: dataCommit.commit.author.name,
        avatar_url: dataCommit.author.avatar_url,
        date: dataCommit.commit.author.date,
        email: dataCommit.commit.author.email,
      },
      message: dataCommit.commit.message,
      url: dataCommit.html_url,
    };
    return parsedCommit;
  };

  /**
   * Updates our state with the nearly parsed commits from github
   * @param isFrontEnd If we're updating frond-end or back-end
   * @param perPage How many entries we're fetching per page
   */
  const updateCommitsState = async (isFrontEnd: Boolean, perPage: number) => {
    await getCommitsFromGithub(isFrontEnd, perPage).then((response) => {
      const data = response?.data;
      const parsedCommitsList: CommitsType[] = [];

      // Loop to push the commits into repo
      data.map((dataCommit: any) => {
        parsedCommitsList.push(getParsedCommit(dataCommit));
      });

      // Updates the state based on which we are pulling from github
      if (isFrontEnd) {
        setCommitsFront(parsedCommitsList);
      } else {
        setCommitsBack(parsedCommitsList);
      }
    });
  };

  // Updates the commits state
  useEffect(() => {
    const get = async () => {
      const perPage = 5;
      updateCommitsState(true, perPage);
      updateCommitsState(false, perPage);
    };
    get();
  }, []);

  /**
   *
   * @param RepositoryCardProps Props
   * @returns React component that draws a repository card with its recent commits
   */
  const RepositoryCard = ({ commits, repositoryData }: RepositoryCardProps) => {
    return (
      <Card>
        <Repository>
          <strong>
            <Link
              href={`https://github.com/${repositoryData.owner}/${repositoryData.repo}`}
              target="_blank"
            >
              {repositoryData.repo}
            </Link>
          </strong>
          <span>(Recent Commits)</span>
        </Repository>
        <ul>
          {commits &&
            commits.map((commit, index) => (
              <Commit key={index}>
                <GitProfileLink
                  href={`https://www.github.com/${commit.author.login}`}
                  target="_blank"
                >
                  <AuthorImg src={commit.author.avatar_url} />
                </GitProfileLink>
                <Link href={commit.url} target="_blank">
                  {commit.message}
                </Link>
                <DateBox>
                  <Date>
                    {format(
                      parseISO(commit.author.date),
                      "'Dia' dd 'de' MMMM', às ' HH:mm'h'",
                      { locale: pt }
                    )}
                  </Date>
                </DateBox>
              </Commit>
            ))}
        </ul>
      </Card>
    );
  };

  return (
    <>
      <Wrapper>
        {commitsFront && (
          <RepositoryCard
            commits={commitsFront}
            repositoryData={repositoryData['front']}
          />
        )}
        {commitsBack && (
          <RepositoryCard
            commits={commitsBack}
            repositoryData={repositoryData['back']}
          />
        )}
      </Wrapper>
    </>
  );
};

export default Commits;
