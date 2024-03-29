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
  AddButton
} from './styles';
import { useHistory } from 'react-router-dom';
import { PostType } from '../../../../types/post';
import {
  getAllPostsByAuthor,
  deletePost,
} from '../../../../services/callsApi';
import auth from '../../../../services/authService';
import Loading from '../../../../components/Loading';
import Pagination from '../../../../components/Pagination';

const List = () => {
  const history = useHistory();
  const [response, setResponse] = useState({});
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPagesPagination, setTotalPagesPagination] = useState(1)

  const [postsCopy, setPostsCopy] = useState([]);

  // Get all posts
  useEffect(() => {
    const get = async () => {
      const loggedUserData = await auth.getCurrentUser();
      if (loggedUserData) {
        const { userid } = loggedUserData?.data;
        await getAllPostsByAuthor(userid, currentPage)
          .then((response) => {
            setLoaded(true);
            setPosts(response.data.userPosts.data);
            setPostsCopy(response.data.userPosts.data)

            const total_pages = response.data.totalPages;
            if (totalPagesPagination !== total_pages)
            setTotalPagesPagination(total_pages)
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };
    get();
  }, [response, currentPage]);

  /**
   * Deletes the post
   * @param postId The post id
   */
  const processPostDeletion = async (postId: string | undefined) => {
    if (postId !== undefined) {
      await deletePost(postId)
        .then((response) => {
          if (response.status === 200) {
            alert('post deletado');
            setResponse(response);
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

  /**
   * Handles the click on pagination to change pages
   * @param data The data
   */
  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected +1)
  }

  /**
   * Processes the search event
   * @param e The event
   */
  const processSearch = (e: any) => {
      const val = e.target.value;
      const filtered = posts.filter(p=> p.title.toLowerCase().includes(val));
      setPosts(val !== '' ? filtered : postsCopy)
  }

  return (
    <Wrapper>
      <Header>
          <AddButton onClick={() => history.push('/admin/posts/new')}/>
        <Search>
          <Input id="search" type="text" onChange={(e) => processSearch(e)}/>
        </Search>
      </Header>
      {!loaded ? (
        <Loading />
      ) : (
        <PostsList>
          {posts.map((post: PostType) => (
            <Post key={post?.id}>
              <LinkToPost
                to={`/posts/${post?.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {post?.title}
              </LinkToPost>
              <Controls>
                <Edit onClick={() => processPostEdit(post?.slug)} />
                <Delete onClick={() => processPostDeletion(post?.id)} />
              </Controls>
            </Post>
          ))}
          {totalPagesPagination > 1 && (
          <Pagination
            numberPages={totalPagesPagination}
            handlePageClick={handlePageClick}
          />
        )}
        </PostsList>
      )}
    </Wrapper>
  );
};

export default List;
