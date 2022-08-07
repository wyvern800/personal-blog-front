import React, { useState, useEffect } from 'react';

import { PostType } from '../../types/post';

import { TagType } from '../../types/tag';

import { Tags, Post, Tag, PostList } from './styles';
import SinglePost from '../../components/SinglePost';

import NewBadge from '../../components/NewBadge';

import { getAllPosts } from '../../services/callsApi';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Pagination from '../Pagination';

type AllPostsProps = {
  firstSeparated?: Boolean;
  width?: string | undefined;
};

const AllPosts = (props: AllPostsProps) => {
  const { firstSeparated, width } = props;
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loaded, setLoaded] = useState<Boolean>(false);
  const [response, setResponse] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPagesPagination, setTotalPagesPagination] = useState(1)

  // Gets a list of all posts
  useEffect(() => {
    const getPosts = async (): Promise<PostType[]> => {
      const response = await getAllPosts(currentPage);
      setPosts(response.data.posts.data);

      const total_pages = response.data.totalPages;

      if (totalPagesPagination !== total_pages)
      setTotalPagesPagination(response.data.totalPages)

      return response.data.posts.data;
    };
    getPosts().then((data) => {
      if (data) {
        //setInterval(() => {
          setLoaded(true);
        //}, 1000);
      }
    });
  }, [response, currentPage]);

  /**
   * Handles the click on pagination to change pages
   * @param data The data
   */
  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected +1)
  }

  return (
    <>
      {firstSeparated && currentPage === 1 && (
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
                  firstSeparated={firstSeparated}
                  setResponse={setResponse}
                />
              );
            })}
        </>
      )}
        <>
          {firstSeparated && currentPage === 1 ? (
            <PostList>
              {posts
                .filter((_, index: number) => index !== 0)
                .map((post: PostType) => (
                  <Post key={post?.id} to={`/posts/${post?.slug}`}>
                    <h4>{post?.title || <Skeleton/>}</h4>
                    <NewBadge createdAt={post?.created_at} />
                    {post?.tags && (
                      <Tags>
                        {post?.tags?.map((tag: TagType) => (
                          <Tag key={tag.id} to={`/posts?tag=${tag.id}`}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Tags>
                    )}
                  </Post>
                ))}
            </PostList>
          ) : (
            <PostList>
              {posts.map((post: PostType) => (
                <Post key={post?.id} to={`/posts/${post?.slug}`}>
                  <h4>{post?.title}</h4>
                  <NewBadge createdAt={post?.created_at} />
                  {post?.tags && (
                    <Tags>
                      {post?.tags?.map((tag: TagType) => (
                        <Tag key={tag.id} to={`/posts?tag=${tag.id}`}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Tags>
                  )}
                </Post>
              ))}
            </PostList>
          )}
        </>
        {loaded && totalPagesPagination > 1 && (
          <Pagination
            numberPages={totalPagesPagination}
            handlePageClick={handlePageClick}
          />
        )}
    </>
  );
};
export default AllPosts;
