import api from '../services/api';
import { PostType } from '../types/post';
import { tokenKey } from './authService';

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
const getAllPosts = async (currentPage: number) => {
  const response = await api.get('/posts', {
    params: {
      page: currentPage,
      "per_page": 5
    }
  });
  return response;
};

/**
 * Gets a list with all posts
 */
const getAllPostsByAuthor = async (userId: number, currentPage: number) => {
  const response = await api.get(`/posts/byuser/${userId}`, {
    params: {
      page: currentPage,
      "per_page": 5
    }
  });
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

/**
 * Check if user has liked the post
 * @param postId The post id
 * @returns true if user liked post | false if not
 */
const hasUserLikedPost = async (postId: string): Promise<any> => {
  const response = await api.get(`/posts/hasuserliked/${postId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    }
  });
  return response;
}

/**
 * Process the like or dislike action
 * @param postId The post id
 */
const likeDislikePost = async (postId: string): Promise<any> => {
  const response = await api.get(`/posts/like/${postId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    }
  });
  return response;
}

export {
  getAllPosts,
  getPost,
  getPostAuthor,
  createPost,
  getAllPostsByAuthor,
  deletePost,
  editPost,
  getPostById,
  hasUserLikedPost,
  likeDislikePost
};
