import React, { useEffect, useState } from 'react';
import { requestFront, requestBack } from '../../services/githubApi';
import {
  Wrapper,
  Link,
  AuthorImg,
  Commit,
  Repository,
  DateBox,
  Date as DatePost,
} from './styles';
import { parseISO, formatDistance } from 'date-fns';
import { CommitsType } from '../../types/commits';

const Commits = () => {
  const repository = {
    name: 'personal-blog-front',
    link: 'https://github.com/wyvern800/personal-blog-front',
  };

  const [commitsFront, setCommitsFront] = useState<CommitsType[]>();
  //const [commitsBack, setCommitsBack] = useState<CommitsType[]>();

  /**
   * Parses commit to save in our state, cause github object is huge as fk
   * @param dataCommit Commit data
   * @returns Returns parsed commit to save on state
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

  useEffect(() => {
    const get = async () => {
      await requestFront().then((response) => {
        const data = response?.data;
        const parsedCommitsList: CommitsType[] = [];

        // Loop to push the commits into repo
        data.map((dataCommit: any) => {
          parsedCommitsList.push(getParsedCommit(dataCommit));
        });

        setCommitsFront(parsedCommitsList);
      });
      /*await requestBack().then((response) => {
        const data = response?.data;
        const parsedCommitsList: CommitsType[] = [];

        // Loop to push the commits into repo
        data.map((dataCommit: any) => {
          parsedCommitsList.push(getParsedCommit(dataCommit));
        });

        setCommitsBack(parsedCommitsList);
      });*/
    };
    get();
  }, []);

  return (
    <Wrapper>
      <Repository>
        <strong>
          <Link href={repository.link} target="_blank">
            {repository.name}
          </Link>
        </strong>
        <span>(Recent Commits)</span>
      </Repository>
      <ul>
        {commitsFront &&
          commitsFront.map((commit, index) => (
            <Commit key={index}>
              <AuthorImg src={commit.author.avatar_url} />
              <Link href={commit.url} target="_blank">
                {commit.message}
              </Link>
              <DateBox>
                <DatePost>
                  {formatDistance(
                    parseISO(commit.author.date),
                    new Date(),
                    { addSuffix: true}
                  )}
                </DatePost>
              </DateBox>
            </Commit>
          ))}
      </ul>
      {/*<ul>
        {commitsBack &&
          commitsBack.map((commit, index) => (
            <li key={index}>
              <span>{commit.message}</span>
            </li>
          ))}
          </ul>*/}
    </Wrapper>
  );
};

export default Commits;
