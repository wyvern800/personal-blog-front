import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import { PostType } from '../../types/post';
import { PostParams } from '../../types/post.params';

import {
  Container,
  Main,
  ArticleBody,
  ArticleHeader,
  ArticleFooter,
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
        setLoaded(true)
    });
  }, []);

  return loaded ? (
    <>
      <Title name="Article" />
      <Container>
        <Main>
          <ArticleBody className="article">
            <ArticleHeader>
              <div className="article-title">{post?.title}</div>
            </ArticleHeader>
            {post?.content}
            <ArticleFooter>
              <div className="likes">
                {post?.likes +
                  ' pessoa' +
                  (post?.likes ?? 0 > 1 ? 's gostaram' : ' gostou') +
                  ' deste artigo'}
              </div>
              <div className="author">{post?.author}</div>
            </ArticleFooter>
          </ArticleBody>
        </Main>
      </Container>
    </>
  ) : (
    <>Loading</>
  );
};

export default Post;
