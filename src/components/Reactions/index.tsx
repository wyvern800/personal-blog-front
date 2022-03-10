import React, { useState, useEffect } from 'react';

import { Wrapper, LikeButton, LikeIcon, DislikeIcon, Likes } from './styles';
import { PostType } from '../../types/post';

// Post Props
type PostProps = {
  post: PostType;
};

const Reactions = (props: PostProps) => {
  const { post } = props;
  const [likeStatus, setLikeStatus] = useState<Boolean>(false);

  useEffect(() => {}, [likeStatus, post]);

  // Processes the liking
  const processLikeBehavior = (status: Boolean): void => {
    setLikeStatus(!status);
  };

  return (
    post && (
      <Wrapper>
        <LikeButton onClick={() => processLikeBehavior(likeStatus)}>
          {!likeStatus ? (
            <LikeIcon statusLike={likeStatus} />
          ) : (
            <DislikeIcon statusLike={likeStatus} />
          )}
        </LikeButton>
        <Likes>{post?.likes}1.123 likes</Likes>
      </Wrapper>
    )
  );
};

export default Reactions;
