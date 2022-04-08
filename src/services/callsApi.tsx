import api from '../services/api';
import { PostType } from '../types/post';

/**
 * Gets a specific post by id or slug
 * @param postIdOrSlug The postId or slug
 */
const getPost = async (postIdOrSlug: any) => {
  const response = await api.get(`/posts/${postIdOrSlug}`);
  return response;
};

/**
 * Gets a list with all posts
 */
const getAllPosts = async () => {
  const response = await api.get('/posts');
  return response;
};

/**
 * Gets a list with all posts
 */
const getAllPostsByAuthor = async (userId: number) => {
  const response = await api.get(`/posts/byuser/${userId}`);
  return response;
};

/**
 * Gets the author from current post
 * @param authorId The post author id
 */
const getPostAuthor = async (authorId: number): Promise<any> => {
  const response = await api.get(`/users/${authorId}`);
  return response;
};

/**
 * Create a post for the author
 * @param data The post data
 */
const createPost = async (data: PostType): Promise<any> => {
  const response = await api.post(`/posts`, data);
  return response;
};

/**
 * Delete a post by its id
 * @param postId The post id we're deleting
 */
const deletePost = async (postId: string): Promise<any> => {
  const response = await api.delete(`/posts/${postId}`);
  return response;
};

/**
 * Get a post by its id
 * @param postId The post id we're deleting
 */
const getPostById = async (postId: string): Promise<any> => {
  const response = await api.get(`/posts/${postId}`);
  return response;
};

/**
 * Get a post by its id
 * @param data The post data
 */
const editPost = async (postId: string, data: PostType): Promise<any> => {
  const response = await api.put(`/posts/${postId}`, data);
  return response;
};

export {
  getAllPosts,
  getPost,
  getPostAuthor,
  createPost,
  getAllPostsByAuthor,
  deletePost,
  editPost,
  getPostById,
};
