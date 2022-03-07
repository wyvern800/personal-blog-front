import api from '../services/api';

/**
 * Gets a specific post by id or slug
 * @param postIdOrSlug The postId or slug
 */
const getPost = async (postIdOrSlug: any) => {
  const response = await api.get(`/posts/${postIdOrSlug}`);
  return response;
}

/**
 * Gets a list with all posts
 */
const getAllPosts = async () => {
  const response = await api.get('/posts');
  return response;
}

/**
 * Gets the author from current post
 * @param authorId The post author id
 */
const getPostAuthor = async (authorId: number): Promise<any> => {
  const response = await api.get(`/users/${authorId}`)
  return response;
}

export {
  getAllPosts,
  getPost,
  getPostAuthor
}
