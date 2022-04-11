import React, { useState, useEffect } from 'react';

import { Wrapper, LikeButton, LikeIcon, DislikeIcon, Likes } from './styles';
import { PostType } from '../../types/post';
import { hasUserLikedPost, likeDislikePost } from '../../services/callsApi';

// Post Props
type PostProps = {
  post: PostType;
  setResponse: any;
};

const Reactions = (props: PostProps) => {
  const { post, setResponse } = props;
  const [likeStatus, setLikeStatus] = useState<Boolean>(false);

  // Changes the like status of the post
  useEffect(() => {
    const get = async () => {
        await hasUserLikedPost(post.id).then((response) => {
          setLikeStatus(response.data)
          setResponse(response.data)
        })
    }
    get();
  }, [likeStatus, post]);

  // Processes the liking
  const processLikeBehavior = async (status: Boolean): Promise<void> => {

    // Process the like / dislike action
    await likeDislikePost(post.id).then((response) => {
      setLikeStatus(!response.data)
      setResponse(response.data)
    })

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
        <Likes>{post?.likes_quantity} likes</Likes>
      </Wrapper>
    )
  );
};

export default Reactions;
