import React from 'react';
import { PostType } from '../../types/post';

import { Body, Header, Content, Footer, LinkToPost } from './styles';

import Placeholder from '../../components/Placeholder';
import Reactions from '../../components/Reactions';

import profile from '../../assets/images/profiles/a.jpg';

type PostProps = {
  post: PostType;
  loaded: Boolean;
  width?: string;
};

const SinglePost = (props: PostProps) => {
  const { post, loaded, width } = props;

  return (
    <>
      <Body style={{ width: width }}>
        {loaded ? (
          <>
            <Header><LinkToPost to={`/posts`}>{post?.title}</LinkToPost></Header>
            <Content>{post?.content}</Content>
            <Footer>
              <Reactions post={post} />
              <div className="author">
                {post?.author}
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
