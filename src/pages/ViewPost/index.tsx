import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PostType } from '../../types/post';
import { PostParams } from '../../types/post.params';

import SinglePost from '../../components/SinglePost';
import Breadcrumb from '../../components/Breadcrumb';

import { Container, Main } from './styles';

import Title from '../../components/Title';

import { getPost } from '../../services/callsApi';

const ViewPost = () => {
  const [post, setPost] = useState<PostType>();
  const { id } = useParams<PostParams>();
  const [loaded, setLoaded] = useState<Boolean>(false);
  const [response, setResponse] = useState({});

  useEffect(() => {
    const get = async (): Promise<void> => {
      await getPost(id).then((response) => {
        setPost(response?.data);
         setInterval(() => {
          setLoaded(true);
         }, 1000);
      });
    };
    get();
  }, [response]);

  return (
    <>
      <Title name={post?.title} />
      <Breadcrumb
        previous={[{ name: 'Home', linkTo: '/' }, { name: 'Posts', linkTo: '/posts' }]}
        currentAt={{ name: post?.title, linkTo: `/posts/${post?.id}` }}
      />
      <Container>
        <Main>
          <SinglePost post={post} loaded={loaded} width={'70%'} setResponse={setResponse}/>
        </Main>
      </Container>
    </>
  );
};

export default ViewPost;
