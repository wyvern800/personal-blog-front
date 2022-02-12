import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import { PostType } from '../../types/post';
import { PostParams } from '../../types/post.params';

import SinglePost from '../../components/SinglePost';

import {
  Container,
  Main,
  ArticleBody,
  ArticleHeader,
  ArticleFooter,
  Loading,
} from './styles';

import Title from '../../components/Title';

const Post = () => {
  const [post, setPost] = useState<PostType>();
  const { id } = useParams<PostParams>();
  const [loaded, setLoaded] = useState<Boolean>(false);

  useEffect(() => {
    const getPost = async (): Promise<void> => {
      const response = await api.get(`/posts/${id}`);
      setPost(response?.data);
    };
    getPost().then(() => {
      setInterval(() => {
        setLoaded(true);
      }, 1000);
    });
  }, []);

  return (
    <>
      <Title name={post?.title} />
      <Container>
        <Main>
          <SinglePost post={post} loaded={loaded} width={"70%"}/>
        </Main>
      </Container>
    </>
  );
};

export default Post;
