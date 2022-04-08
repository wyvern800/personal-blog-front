import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  Header,
  Search,
  Input,
  Button,
  PostsList,
  Controls,
  Post,
  Delete,
  Edit,
  LinkToPost,
} from './styles';
import { useHistory } from 'react-router-dom';
import { PostType } from '../../../../types/post';
import { getAllPostsByAuthor, deletePost, editPost } from '../../../../services/callsApi';
import auth from '../../../../services/authService';

const List = () => {
  const history = useHistory();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Get all posts
  useEffect(() => {
    const get = async () => {
      const loggedUserData = await auth.getCurrentUser();
      console.log(loggedUserData);
      if (loggedUserData) {
        const { userid } = loggedUserData?.data;
        await getAllPostsByAuthor(userid)
          .then((response) => {
            setLoaded(true);
            setPosts(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };
    get();
  }, []);

  /**
   * Deletes the post
   * @param postId The post id
   */
  const processPostDeletion = async (postId: string | undefined) => {
    if (postId !== undefined) {
      await deletePost(postId)
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            alert('post deletado');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  /**
   * Edits the post
   * @param postId The post id
   */
   const processPostEdit = async (postId: string | undefined) => {
    if (postId !== undefined) {
      history.push(`/admin/posts/edit/${postId}`);
    }
  };

  return (
    loaded && (
      <Wrapper>
        <Header>
          <Button onClick={() => history.push('/admin/posts/new')}>
            Add Post
          </Button>
          <Search>
            <Input disabled id="search" type="text" />
            <Button disabled type="submit">
              Search
            </Button>
          </Search>
        </Header>
        <PostsList>
          {posts.map((post: PostType) => (
            <Post key={post?.id}>
              <LinkToPost
                to={`/posts/${post?.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {post?.title}
              </LinkToPost>
              <Controls>
                <Edit onClick={() => processPostEdit(post?.id)} />
                <Delete onClick={() => processPostDeletion(post?.id)} />
              </Controls>
            </Post>
          ))}
        </PostsList>
      </Wrapper>
    )
  );
};

export default List;
