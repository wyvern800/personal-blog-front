import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import { PostType } from '../../types/post';
import { PostParams } from '../../types/post.params';

import SinglePost from '../../components/SinglePost';
import Breadcrumb from '../../components/Breadcrumb';

import { Container, Main } from './styles';

import Title from '../../components/Title';

const ViewPost = () => {
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
      <Breadcrumb
        previous={[{ name: 'Posts', linkTo: '/posts' }]}
        currentAt={{ name: post?.title, linkTo: `/posts/${post?.id}` }}
      />
      <Container>
        <Main>
          <SinglePost post={post} loaded={loaded} width={'70%'} />
        </Main>
      </Container>
    </>
  );
};

export default ViewPost;
