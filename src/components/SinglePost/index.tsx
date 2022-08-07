import React, { useState, useEffect } from 'react';
import { PostType } from '../../types/post';

import { Body, Header, Content, Footer, LinkToPost, Author, ReadMore } from './styles';

import Placeholder from '../../components/Placeholder';
import Reactions from '../../components/Reactions';

import profile from '../../assets/images/profiles/a.jpg';

import api from '../../services/api';

import { User } from '../../types/user';

import { getPostAuthor } from '../../services/callsApi';

import NewBadge from '../NewBadge';

import parse from "html-react-parser";

type PostProps = {
  post: PostType;
  loaded: Boolean;
  width?: string;
  firstSeparated?: Boolean;
  setResponse: any;
};

const SinglePost = (props: PostProps) => {
  const { post, loaded, width, firstSeparated, setResponse } = props;

  const [author, setAuthor] = useState<User>();

  // Gets post author and set to state
  useEffect(() => {
    const get = async () => {
      if (post === undefined) return;
      await getPostAuthor(post?.userid).then((response) => {
        setAuthor(response?.data);
      });
    };
    get();
  }, [post]);

  return (
    <>
      <Body style={{ width: width }}>
        {loaded ? (
          <>
            <Header>
              <LinkToPost to={`/posts/${post?.slug}`}>{post?.title}</LinkToPost><NewBadge createdAt={post?.created_at}/>
            </Header>
            <Content firstSeparated={firstSeparated} >{post !== undefined && parse(post?.content)} </Content>
            {firstSeparated && <ReadMore><LinkToPost to={`/posts/${post?.slug}`}>Read more »</LinkToPost></ReadMore>}
            <Footer>
              <Reactions post={post} setResponse={setResponse}/>
              <div className="author">
                <Author to={`/profile/${author?.username}`}>
                  {author?.username}
                </Author>
              </div>
            </Footer>
          </>
        ) : (
          <Placeholder />
        )}
      </Body>
    </>
  );
};

export default SinglePost;
