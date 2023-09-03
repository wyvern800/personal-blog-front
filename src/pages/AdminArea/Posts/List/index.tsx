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
  AddButton,
} from './styles';
import { useHistory } from 'react-router-dom';
import { PostType } from '../../../../types/post';
import { getAllPostsByAuthor, deletePost } from '../../../../services/callsApi';
import auth from '../../../../services/authService';
import Loading from '../../../../components/Loading';
import Pagination from '../../../../components/Pagination';

import { toast } from 'react-toastify';

import Modal from '../../../../components/Modal';
import { ModalStates } from '../../../../types/modal.states';
import CustomButton from '../../../../components/Button';
import { Buttons, InnerModal } from '../../../../styles/global';


const List = () => {
  const history = useHistory();
  const [response, setResponse] = useState({});
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPagesPagination, setTotalPagesPagination] = useState(1);

  const [search, setSearch] = useState<string>('');

  const [deletingModalOpen, setDeletingModalOpen] = useState<ModalStates>({
    isModalOpen: false,
  });

  const getAllPosts = async () => {
    setLoaded(false);
    const loggedUserData = await auth.getCurrentUser();
    if (loggedUserData) {
      const { userid } = loggedUserData?.data;
      await getAllPostsByAuthor(userid, currentPage, search)
        .then((response) => {
          setLoaded(true);
          setPosts(response.data.userPosts.data);

          const total_pages = response.data.totalPages;
          if (totalPagesPagination !== total_pages)
            setTotalPagesPagination(total_pages);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // Get all posts
  useEffect(() => {
    getAllPosts();
  }, [response, currentPage, search]);

  /**
   * Deletes the post
   * @param postId The post id
   */
  const processPostDeletion = async (postId: string | undefined) => {
    if (postId !== undefined) {
      await deletePost(postId)
        .then((response) => {
          if (response.status === 200) {
            toast.info(`The post was deleted!`);
            setResponse(response);
            setDeletingModalOpen({ isModalOpen: false})
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
    setCurrentPage(data.selected + 1);
  };

  /**
   * Processes the search event
   * @param e The event
   */
  const processSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Wrapper>
      <Modal
        title={`Are you sure you want to delete post #${deletingModalOpen.object?.id}!`}
        open={deletingModalOpen}
        setOpen={setDeletingModalOpen}
        onCloseModal={() => {
          setDeletingModalOpen({
            ...deletingModalOpen,
            isModalOpen: false,
          });
        }}
      >
        <InnerModal>
          <strong>Title:</strong> {deletingModalOpen?.object?.title}
        </InnerModal>
        <Buttons>
          <CustomButton
            bgColor="rgba(137, 255, 87, 0.67)"
            //color="#1F1F1E"
            onClick={() => {
              // If there is an ID, remove, if not, then skip
              if (deletingModalOpen.object) {
                processPostDeletion(deletingModalOpen.object?.id);
              }
            }}
          >
            Yes
          </CustomButton>
          <CustomButton
            bgColor="red"
            //color="#1F1F1E"
            onClick={() => {
              setDeletingModalOpen({
                ...deletingModalOpen,
                isModalOpen: false,
              });
            }}
          >
            No
          </CustomButton>
        </Buttons>
      </Modal>
      <Header>
        <AddButton onClick={() => history.push('/admin/posts/new')} />
        <Search>
          <Input id="search" type="text" onChange={(e) => processSearch(e)} />
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
                <Delete
                  onClick={() =>
                    setDeletingModalOpen({
                      object: post,
                      isModalOpen: true,
                    })
                  }
                />
              </Controls>
            </Post>
          ))}
        </PostsList>
      )}
      {totalPagesPagination > 1 && (
        <Pagination
          numberPages={totalPagesPagination}
          handlePageClick={handlePageClick}
        />
      )}
    </Wrapper>
  );
};

export default List;
