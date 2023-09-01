import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

import { PostType } from '../../types/post';
import { CommentType } from '../../types/comment';

import {
  listAllPostComments,
  getUserById,
  postComment,
  deletePostComment,
} from '../../services/callsApi';

import {
  Container,
  Comment,
  Avatar,
  Content,
  Author,
  ChatBox,
  Wrapper,
  NoComments,
  RemoveComment,
  ReportComment,
  CommentActions,
  AuthorName,
  CommentContent,
} from './styles';

import { parseISO, formatRelative } from 'date-fns';

import { User } from '../../types/user';

import auth from '../../services/authService';

import { toast } from 'react-toastify';

import { useHistory } from 'react-router-dom';

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
  const [sending, setSending] = useState<boolean>(false);
  const [isUserAdmin, setIsUserAdmin] = useState<boolean>(false);

  const history = useHistory();

  // Gets the current logged informations
  useEffect(() => {
    const get = async () => {
      await auth.getCurrentUser().then(async (res) => {
        setLoggedUser(res.data);

        // If user is admin set
        await auth.isUserAdmin().then((res) => {
          setIsUserAdmin(res.data.isAdmin);
        })
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
   * Handles the comment deletion
   * @param {string} commentId The comment id
   */
  const handleDeleteComment = async (commentId: string): Promise<any> => {
    await deletePostComment(commentId)
      .then((res) => {
        setResponse(res);
      })
      .catch(() => {
        toast.error('Commentary could not be deleted.');
      });
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
      setSending(true);
      await postComment(commentObject).then(() => {
        setResponse(commentObject);
      }).finally(() => {
        setSending(false);
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
        await Promise.all(getPostList.data.postComments.map(getUserData))
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
          {comments && comments.length > 0 ? (
            comments.map((comment: any) => {
              return (
                <Comment key={comment.id}>
                  <Avatar src={comment.avatar} />
                  <Content>
                    <Author>
                      <AuthorName
                        onClick={() => {
                          history.push(`/profile/${comment.username}`);
                        }}
                      >
                        {comment.username}
                      </AuthorName>
                      <span>
                        {formatRelative(
                          parseISO(comment.created_at),
                          new Date()
                        )}
                      </span>
                      <CommentActions>
                        {(loggedUser?.username === comment.username || isUserAdmin) && (
                            <RemoveComment
                              title="Remove comment"
                              onClick={() => handleDeleteComment(comment.id)}
                            />
                        )}
                        {(loggedUser?.username !== comment.username && !isUserAdmin) && (
                          <ReportComment title="Report comment"/>
                        )}
                      </CommentActions>
                    </Author>
                    <CommentContent>{comment.content}</CommentContent>
                  </Content>
                </Comment>
              );
            })
          ) : (
            <NoComments>
              Nobody has commented yet, why don't you do it then?
            </NoComments>
          )}
        </Container>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            e.target.reset();
            e.target.blur();
          }}
        >
          <ChatBox
            placeholder={`Comment as @${loggedUser?.username}`}
            onChange={handleComment}
            onKeyPress={sendComment}
            disabled={sending}
          />
        </form>
      </Wrapper>
    )
  );
};

export default Comments;
