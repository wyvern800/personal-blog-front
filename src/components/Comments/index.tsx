import React, { useState, useEffect } from 'react';

import { PostType } from '../../types/post';
import { CommentType } from '../../types/comment';

import { listAllPostComments, getUserById } from '../../services/callsApi';

import { Container, Comment, Avatar, Content, Author } from './styles';

import { parseISO, formatRelative } from 'date-fns';

type CommentsProps = {
  post: PostType;
  setResponse: any;
  width: string;
  loaded: Boolean;
};

/**
 * Creates the commentaries section for a post
 * @param post The post id
 */
const Comments = ({ post, width, loaded, setResponse }: CommentsProps) => {
  const [comments, setComments] = useState<CommentType[]>();
  const [loadedComments, setLoadedComments] = useState<boolean>(false);

  useEffect(() => {
    const get = async () => {
      const getPostList = await listAllPostComments(post.id);

      let newComments: any[] = [];

      if (getPostList) {
        const getUserData = async (comment: any) => {
          const commenter = await getUserById(comment?.userid);

          if (commenter) {
            const newComment = {
              id: comment.id,
              content: comment.content,
              username: commenter.data.username,
              avatar: `https://ui-avatars.com/api/?name=${
                commenter.data.username
              }&rounded=true&background=928f8b`,
              postId: comment.postId,
              created_at: comment.created_at
            };
            newComments.push(newComment);
          }
        };

        // Resolves the promises in one call to avoid data loss
        await Promise.all(getPostList.data.map(getUserData))
          .then(() => {
            setComments(newComments);
            setLoadedComments(true);
          })
          .catch(() => {
            setComments([]);
            setLoadedComments(false);
          });
      }
    };
    get();
  }, [loadedComments, post]);

  return (
    loaded &&
    loadedComments && (
      <Container width={width}>
        {comments &&
          comments.length > 0 &&
          comments.map((comment: any) => {
            return (
              <Comment key={comment.id}>
                <Avatar src={comment.avatar} />
                <Content>
                  <Author>{comment.username}<span>{formatRelative(
                      parseISO(comment.created_at),
                      new Date()
                    )}</span></Author>
                  <span>{comment.content}</span>
                </Content>
              </Comment>
            );
          })}
      </Container>
    )
  );
};

export default Comments;
