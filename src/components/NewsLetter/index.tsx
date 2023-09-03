import React, { useState, useEffect } from 'react';
import { Main } from './styles';
import { getLastNewsLetter } from '../../services/callsApi';
import { NewsType } from '../../types/news';
import parse from 'html-react-parser';
import Cookies from 'js-cookie';
import { isAfter, isBefore, addDays } from 'date-fns';

const NewsLetter = () => {
  const [newsLetter, setNewsLetter] = useState<NewsType | null>(null);
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    const get = async () => {
      await getLastNewsLetter().then((res: any) => {
        if (res.data !== '') {
          setNewsLetter(res.data);
        }
      });
    };
    get();
  }, []);

  useEffect(() => {
    if (newsLetter !== null) {
      const lastModalCloseTime = Cookies.get('modalCloseTime');

      if (lastModalCloseTime) {
        const sevenDaysAgo = addDays(new Date(), -7);

        // If the last time user closed modal is 7 days later,
        if (
          isAfter(new Date(lastModalCloseTime), sevenDaysAgo)
        ) {
          setModalOpen(false);
        }

        // If there is a new newsletter that has been sent, re-show the modal
        if (isBefore(new Date(lastModalCloseTime), new Date(newsLetter?.created_at ?? ''))) {
          setModalOpen(true);
        }
      }
    }
  }, [newsLetter]);

  const closeModal = () => {
    setModalOpen(false);
    Cookies.set('modalCloseTime', new Date().toISOString(), { expires: 7 });
  };

  return newsLetter !== null && modalOpen ? (
    <Main>
      <div
        style={{
          width: '100%',
          backgroundColor: 'transparent',
        }}
        className="ui orange small positive message"
      >
        <i className="close icon" onClick={closeModal}></i>
        <div>{parse(String(newsLetter?.content))}</div>
      </div>
    </Main>
  ) : (
    <></>
  );
};

export default NewsLetter;
