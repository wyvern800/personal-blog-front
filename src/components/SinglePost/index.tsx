import React, { useState, useEffect } from 'react';
import { PostType } from '../../types/post';

import { Body, Header, Content, Footer, LinkToPost, Author, ReadMore, EditThisPost } from './styles';

import Placeholder from '../../components/Placeholder';
import Reactions from '../../components/Reactions';

import { User } from '../../types/user';

import { getPostAuthor, listAllPostComments } from '../../services/callsApi';
import auth from '../../services/authService';

import NewBadge from '../NewBadge';

import parse from "html-react-parser";

import { useHistory } from "react-router-dom";

import Prism from "prismjs"; // Import Prism.js

import "../../styles/prism-material-dark.css";

type PostProps = {
  post: PostType;
  loaded: Boolean;
  width?: string;
  firstSeparated?: Boolean;
  setResponse: any;
};

const SinglePost = (props: PostProps) => {
  const { post, loaded, width, firstSeparated, setResponse } = props;
  const [postComments, setPostComments] = useState<number>();
  const [author, setAuthor] = useState<User>();
  const [canEditPost, setCanEditPost] = useState<boolean>(false);
  const history = useHistory();

  Prism.highlightAll();

  // Gets post author and set to state
  useEffect(() => {
    const get = async () => {
      if (post === undefined) return;
      await getPostAuthor(post?.userid).then(async (response) => {
        const foundAuthor: User = response?.data;
        setAuthor(foundAuthor);
        // If we are whether adminstrator or post owner
        if (String(foundAuthor?.userid) === String(post?.userid)) {
          setCanEditPost(true);
        } else { // If we're ADMIN, we can also edit
          await auth.isUserAdmin().then((res) => {
            setCanEditPost(res?.data?.isAdmin);
          });
        }
      });
    };
    get();
  }, [post]);

  // Gets the amount of commentaries
  useEffect(() => {
    const get = async () => {
      await listAllPostComments(post?.id).then((response) => {
        setPostComments(response?.data.length);
      });
    }
    get();
  }, [post]);
//LuEdit

  /**
   * Gets the corrected comments label
   *
   * @param {number | undefined} postComments Amount of post coments
   * @returns {string} Gets the comments label
   */
  const getCommentsLabel = (postComments: number | undefined): string => {
    return postComments === 0 ? `` : `${postComments} comment${postComments && postComments > 1 ? 's': ''}`
  }

  return (
    <>
      <Body style={{ width: width }}>
        {loaded ? (
          <>
            <Header>
              <LinkToPost to={`/posts/${post?.slug}`}>{post?.title} </LinkToPost><NewBadge createdAt={post?.created_at}/>
              {canEditPost && <EditThisPost onClick={() => {
                if (!canEditPost) return
                history.push(`/admin/posts/edit/${post?.slug}`);
              }} />}
            </Header>
            <Content className="canSelect" firstSeparated={firstSeparated} >{post !== undefined && parse(post?.content)} </Content>
            {firstSeparated && <ReadMore><LinkToPost to={`/posts/${post?.slug}`}>Read more »</LinkToPost></ReadMore>}
            <Footer>
              <Reactions post={post} setResponse={setResponse}/>
              <div>{getCommentsLabel(postComments)}</div>
              <div className="author">
                <Author to={`/profile/${author?.username}`}>
                  {author?.username}
                </Author>
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
