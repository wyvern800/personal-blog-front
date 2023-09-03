import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  Header,
  Search,
  Input,
  Button,
  ListStyle,
  Controls,
  Post,
  Delete,
  Edit,
  LinkTo,
  AddButton,
} from './styles';
import { useHistory } from 'react-router-dom';
import { getAllNews, deleteNews } from '../../../../services/callsApi';
import Loading from '../../../../components/Loading';
import Pagination from '../../../../components/Pagination';

import { toast } from 'react-toastify';

import Modal from '../../../../components/Modal';
import { ModalStates } from '../../../../types/modal.states';
import CustomButton from '../../../../components/Button';
import { Buttons, InnerModal } from '../../../../styles/global';
import { NewsType } from '../../../../types/news';

import parse from "html-react-parser";

const List = () => {
  const history = useHistory();
  const [response, setResponse] = useState({});
  const [news, setNews] = useState<NewsType[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPagesPagination, setTotalPagesPagination] = useState(1);

  const [search, setSearch] = useState<string>('');

  const [deletingModalOpen, setDeletingModalOpen] = useState<ModalStates>({
    isModalOpen: false,
  });

  const [viewNewsModalOpen, setViewModalOpen] = useState<ModalStates>({
    isModalOpen: false,
  });

  const get = async () => {
    setLoaded(false);
    await getAllNews(currentPage, search)
      .then((response) => {
        setLoaded(true);
        setNews(response.data.news.data);

        const total_pages = response.data.totalPages;
        if (totalPagesPagination !== total_pages)
          setTotalPagesPagination(total_pages);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Get all news
  useEffect(() => {
    get();
  }, [response, currentPage, search]);

  /**
   * Deletes the news
   * @param newsId The news id
   */
  const processPostDeletion = async (newsId: string | undefined) => {
    if (newsId !== undefined) {
      await deleteNews(newsId)
        .then((response) => {
          if (response.status === 200) {
            toast.info(`The news was deleted!`);
            setResponse(response);
            setDeletingModalOpen({ isModalOpen: false });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  /**
   * Edits the news
   * @param newsId The news id
   */
  const processPostEdit = async (newsId: string | undefined) => {
    if (newsId !== undefined) {
      history.push(`/admin/newsletter/edit/${newsId}`);
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
        title={`Are you sure you want to delete news #${deletingModalOpen.object?.id}!`}
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
          <strong>Content:</strong> {parse(String(deletingModalOpen?.object?.content))}
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
        <AddButton onClick={() => history.push('/admin/newsletter/new')} />
        <Search>
          <Input id="search" type="text" onChange={(e) => processSearch(e)} />
        </Search>
      </Header>
      {!loaded ? (
        <Loading />
      ) : (
        <ListStyle>
          {news.map((news: NewsType) => (
            <Post key={news?.id}>
              {news?.title}
              <Controls>
                <Edit onClick={() => processPostEdit(news?.id)} />
                <Delete
                  onClick={() =>
                    setDeletingModalOpen({
                      object: news,
                      isModalOpen: true,
                    })
                  }
                />
              </Controls>
            </Post>
          ))}
        </ListStyle>
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
