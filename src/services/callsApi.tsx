import api from '../services/api';
import { PostType } from '../types/post';
import { tokenKey } from './authService';
import { CommentType } from '../types/comment';
import { IDataParams } from '../types/base.params';

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
 * @param {number} userId The user
 * @param {number} currentPage The current page
 * @param {string} search The searching filter
 */
const getAllPostsByAuthor = async (userId: number, currentPage: number, search: string) => {
  let params: IDataParams = {
    page: currentPage,
    "per_page": 5,
  }
  // include search parameters if needed
  if (search !== '') params.search = search;
  const response = await api.get(`/posts/byuser/${userId}`, {
    params
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
  const response = await api.post(`/posts`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    }
  });
  return response;
};

/**
 * Delete a post by its id
 * @param postId The post id we're deleting
 */
const deletePost = async (postId: string): Promise<any> => {
  const response = await api.delete(`/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    }
  });
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
 * Edit a post by its id
 * @param data The post data
 */
const editPost = async (postId: string, data: PostType): Promise<any> => {
  const response = await api.put(`/posts/${postId}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    }
  });
  return response;
};

/**
 * Check if user has liked the post
 * @param postId The post id
 * @returns true if user liked post | false if not
 */
const hasUserLikedPost = async (postId: string | undefined): Promise<any> => {
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
const likeDislikePost = async (postId: string | undefined): Promise<any> => {
  const response = await api.get(`/posts/like/${postId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    }
  });
  return response;
}

/**
 * Returns a list of all commentaries of a post
 * @param {string} postId The post id we're retrieving the comments from
 */
const listAllPostComments = async (postId: string | undefined): Promise<any> => {
  const response = await api.get(`/posts/comments/${postId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    }
  })
  return response;
}

/**
 * Retrieves user data by it's id
 * @param userId The userId
 * @returns User data by an user id
 */
const getUserById = async (userId: string | undefined): Promise<any> => {
  const response = await api.get(`/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    }
  })
  return response;
}

/**
 * Posts a commentary
 * @param data The comment data
 */
const postComment = async (data: CommentType | undefined): Promise<any> => {
  const response = await api.post(`/posts/comments`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    }
  })
  return response;
}

/**
 * Delete a post comment by its id
 * @param commentId The comment we are deleting
 */
const deletePostComment = async (commentId: string): Promise<any> => {
  const response = await api.delete(`/posts/comments/${commentId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
    }
  });
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
  hasUserLikedPost,
  likeDislikePost,
  listAllPostComments,
  getUserById,
  postComment,
  deletePostComment
};
