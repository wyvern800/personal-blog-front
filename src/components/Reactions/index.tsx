import React, { useState, useEffect } from 'react';

import { Wrapper, LikeButton, LikeIcon, DislikeIcon, Likes } from './styles';
import { PostType } from '../../types/post';
import { hasUserLikedPost, likeDislikePost } from '../../services/callsApi';
//import { ImSad } from 'react-icons/im';
import auth from '../../services/authService';

// Post Props
type PostProps = {
  post: PostType;
  setResponse: any;
};

const Reactions = (props: PostProps) => {
  const { post, setResponse } = props;
  const [likeStatus, setLikeStatus] = useState<Boolean>(false);
  const [likeAnimation, setLikeAnimation] = useState<Boolean>(false);

  // Changes the like status of the post
  useEffect(() => {
    const get = async () => {
      await hasUserLikedPost(post.id).then((response) => {
        setLikeStatus(response.data);
        setResponse(response.data);
      });
    };
    get();
  }, [likeStatus, setResponse]);

  // Processes the liking
  const processLikeBehavior = async (status: Boolean): Promise<void> => {
    // Process the like / dislike action
    await likeDislikePost(post.id).then((response) => {
      setLikeStatus(!response.data);
      setResponse(response.data);

      setLikeAnimation(true);
    });

    setLikeStatus(!status);
  };

  return post ? (
    <Wrapper>
      {auth.isUserLogged() && (
        <LikeButton
          title="Like this post"
          onClick={() => processLikeBehavior(likeStatus)}
        >
          {!likeStatus ? (
            <DislikeIcon statusLike={likeStatus} />
          ) : (
            <LikeIcon
              title="Dislike this post"
              statusLike={likeStatus}
              likeAnimation={likeAnimation}
            />
          )}
        </LikeButton>
      )}
      <Likes userLogged={auth.isUserLogged()}>
        {post?.likes_quantity !== undefined && post?.likes_quantity > 0
          ? post?.likes_quantity +
            ' like' +
            (post?.likes_quantity > 1 ? 's' : '')
          : /*'Nobody has liked this post yet '*/ ''}
        {/*post?.likes_quantity !== undefined && post?.likes_quantity <= 0 && (
        <ImSad />
      )*/}
      </Likes>
    </Wrapper>
  ) : (
    <></>
  );
};

export default Reactions;
