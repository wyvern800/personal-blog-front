import React, { useState, useEffect } from 'react';
import { PostType } from '../../types/post';

type CommentsProps = {
  post: PostType
}

/**
 * Creates comments section of a post
 * @param post The post object
 * @returns Comments section for the post
 */
const Comments = ({post}: CommentsProps) => {
  return <>Comments Section</>
}

export default Comments;
