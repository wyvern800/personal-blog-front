import React, { useState, useEffect, SyntheticEvent } from 'react';

import { Wrapper, LikeButton, LikeIcon } from './styles';
import { PostType } from '../../types/post';

type PostProps = {
  post: PostType;
};

const Reactions = (props: PostProps) => {
  const { post } = props;
  const [liked, setLiked] = useState<Boolean>();

  useEffect(() => {}, [post]);

  // Processes the liking
  const processLike = (event: SyntheticEvent) => {
    alert('like')
  };

  return (
    <Wrapper>
      <LikeButton onClick={processLike}>
        <LikeIcon /> {post?.likes}
      </LikeButton>
    </Wrapper>
  );
};

export default Reactions;
