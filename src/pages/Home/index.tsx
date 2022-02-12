import React, { useState, useEffect, useCallback } from 'react';

import { PostType } from '../../types/post';

import { Container, Main } from './styles';
import Title from '../../components/Title';

import api from '../../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loaded, setLoaded] = useState<Boolean>(false);

  useEffect(() => {
    const getPosts = async (): Promise<PostType[]> => {
      const response = await api.get('/posts');
      setPosts(response.data);
      return response.data;
    };
    getPosts().then((data) => {
      if (data) {
        setLoaded(true);
      }
    });
  }, []);

  return loaded ? (
    <>
      <Title name="Home" />
      <Container>
        <Main className="main">
          <section>
            {posts.map((post) => (
              <Link key={post.id} to={`/posts/${post.id}`}>
                <div className="article-card">{post.title}</div>
              </Link>
            ))}
          </section>
          <aside>aside</aside>
        </Main>
      </Container>
    </>
  ) : (
    <>Loading...</>
  );
};

export default Home;
