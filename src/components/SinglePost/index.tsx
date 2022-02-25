import React from 'react';
import { PostType } from '../../types/post';

import { Body, Header, Content, Footer } from './styles';

import Placeholder from '../../components/Placeholder';

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
            <Header>{post?.title}</Header>
            <Content>{post?.content}</Content>
            <Footer>
              <div className="likes">
                {post?.likes +
                  ' pessoa' +
                  (post?.likes ?? 0 > 1 ? 's gostaram' : ' gostou') +
                  ' deste artigo'}
              </div>
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
