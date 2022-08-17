import React, {
  useState,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
} from 'react';

import { PostType } from '../../types/post';
import { CommentType } from '../../types/comment';

import {
  listAllPostComments,
  getUserById,
  postComment,
} from '../../services/callsApi';

import {
  Container,
  Comment,
  Avatar,
  Content,
  Author,
  ChatBox,
  Wrapper,
} from './styles';

import { parseISO, formatRelative } from 'date-fns';

import { User } from '../../types/user';

import auth from '../../services/authService';

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
  const [loggedUser, setLoggedUser] = useState<User>();
  const [comment, setComment] = useState<string>();

  // Gets the current logged informations
  useEffect(() => {
    const get = async () => {
      await auth.getCurrentUser().then((res) => {
        setLoggedUser(res.data);
      });
    };
    get();
  }, []);

  /**
   * Handles the comment the logged person is doing
   * @param event The event
   */
  const handleComment = (event: ChangeEvent<HTMLInputElement>): any => {
    setComment(event.target.value);
  };

  /**
   * Handles the requisition to post the comment
   * @param event The event
   */
  const sendComment = async (
    event: KeyboardEvent<HTMLInputElement>
  ): Promise<any> => {
    const { key } = event;

    // Sends the comment
    if (key === 'Enter') {
      const commentObject: CommentType = {
        content: comment,
        postId: post?.id,
        userId: loggedUser?.userid,
      };
      await postComment(commentObject).then(() => {
        setResponse(commentObject);
      });
    }
  };

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
              avatar: `https://ui-avatars.com/api/?name=${commenter.data.username}&rounded=true&background=928f8b`,
              postId: comment.postId,
              created_at: comment.created_at,
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
  }, [loadedComments, post, setResponse]);

  return (
    loaded &&
    loadedComments && (
      <Wrapper width={width}>
        <Container>
          {comments &&
            comments.length > 0 &&
            comments.map((comment: any) => {
              return (
                <Comment key={comment.id}>
                  <Avatar src={comment.avatar} />
                  <Content>
                    <Author>
                      {comment.username}
                      <span>
                        {formatRelative(
                          parseISO(comment.created_at),
                          new Date()
                        )}
                      </span>
                    </Author>
                    <span>{comment.content}</span>
                  </Content>
                </Comment>
              );
            })}
        </Container>
        <form onSubmit={(e)=> {
          e.preventDefault();
          e.target.reset();
          e.target.blur();
        }}>
          <ChatBox
            placeholder={`Comment as @${loggedUser?.username}`}
            onChange={handleComment}
            onKeyPress={sendComment}
          />
        </form>
      </Wrapper>
    )
  );
};

export default Comments;
