import React, { useState, useEffect } from 'react';

import { PostType } from '../../types/post';

import { TagType } from '../../types/tag';

import { Tags, Post, Tag, PostList } from './styles';
import SinglePost from '../../components/SinglePost';

import api from '../../services/api';
import { Link } from 'react-router-dom';

import PlaceholderPosts from '../../components/PlaceholderPosts';

type AllPostsProps = {
  firstSeparated?: Boolean;
  width?: string | undefined;
};

const AllPosts = (props: AllPostsProps) => {
  const { firstSeparated, width } = props;
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
      {firstSeparated && (
        <>
          {posts
            .filter((_, index: number) => index === 0)
            .map((post: PostType) => {
              return (
                <SinglePost
                  key={post?.id}
                  post={post}
                  loaded={loaded}
                  width={width ?? '100%'}
                />
              );
            })}
        </>
      )}
      {loaded ? (
        <>
          {firstSeparated ? (
            <PostList>
              {posts
                .filter((_, index: number) => index !== 0)
                .map((post: PostType) => (
                  <Post key={post?.id} to={`/posts/${post?.id}`}>
                      <h4>{post?.title}</h4>
                      <Tags>
                        {post?.tags?.map((tag: TagType) => (
                          <Tag key={tag.id} to={`/posts?tag=${tag.id}`}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Tags>
                  </Post>
                ))}
            </PostList>
          ) : (
            <PostList>
              {posts.map((post: PostType) => (
                <Post key={post?.id} to={`/posts/${post?.id}`}>
                    <h4>{post?.title}</h4>
                    <Tags>
                      {post?.tags?.map((tag: TagType) => (
                        <Tag key={tag.id} to={`/posts?tag=${tag.id}`}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Tags>
                </Post>
              ))}
            </PostList>
          )}
        </>
      ) : (
        <PlaceholderPosts />
      )}
    </>
  );
};
export default AllPosts;
