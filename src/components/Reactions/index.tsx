import React from 'react';

import { Wrapper, LikeButton, LikeIcon } from './styles';
import { PostType } from '../../types/post';


type PostProps = {
  post: PostType;
};

const Reactions = (props: PostProps) => {
  const { post } = props;

  return (
    <Wrapper>
      <LikeButton> <LikeIcon/> {post?.likes} </LikeButton>
    </Wrapper>
  );
};

export default Reactions;
