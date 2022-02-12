import React, { useState, useEffect } from 'react';

import { PostType } from '../../types/post';
import { TagType } from '../../types/tag';

import { Container, Main, Tags, Post, Tag } from './styles';
import Title from '../../components/Title';
import SinglePost from '../../components/SinglePost';

import api from '../../services/api';
import { Link } from 'react-router-dom';

import PlaceholderPosts from '../../components/PlaceholderPosts';

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
        setInterval(() => {
          setLoaded(true);
        }, 1000);
      }
    });
  }, []);

  return (
    <>
      <Title name="Home" />
      <Container>
        <Main className="main">
          <section>
            {loaded ? (
              <>
                {posts
                  .filter((_, index: number) => index === 0)
                  .map((post: PostType) => {
                    return <SinglePost key={post?.id} post={post} loaded={loaded}/>;
                  })}
                {posts
                  .filter((_, index: number) => index !== 0)
                  .map((post: PostType) => (
                    <Link key={post?.id} to={`/posts/${post?.id}`}>
                      <Post>
                        <h4>{post?.title}</h4>
                        <Tags>
                          {post?.tags?.map((tag: TagType) => (
                            <Tag key={tag.id} to={`/posts?tag=${tag.id}`}>
                              {tag.name}
                            </Tag>
                          ))}
                        </Tags>
                      </Post>
                    </Link>
                  ))}
              </>
            ) : (
              <PlaceholderPosts />
            )}
          </section>
          <aside>aside</aside>
        </Main>
      </Container>
    </>
  );
};

export default Home;
