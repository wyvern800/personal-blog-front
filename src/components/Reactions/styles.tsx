import styled, { css } from 'styled-components';

import { IoHeart } from 'react-icons/io5';

import { IconProps } from '../../types/icontype';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Likes = styled.div`
  font-size: 14px;
`;

export const LikeButton = styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
`;


export const LikeIcon = styled(IoHeart)<IconProps>`
  font-size: 2rem;
  border: 2px solid #1f1f1e;
  border-radius: 15px;
  padding: 5%;
  margin-right: 3px;
  transition: 0.3s ease-in-out;

  // Animatin when we move our mouse out
  &:not(:hover) {
    transition: 0.3s ease-in-out;
  }

  &:hover {
    fill: rgba(128, 128, 128, 0.65);
    cursor: pointer;
  }
`;

export const DislikeIcon = styled(IoHeart)<IconProps>`
  font-size: 2rem;
  border: 2px solid #1f1f1e;
  border-radius: 15px;
  padding: 5%;
  margin-right: 3px;

  fill: ${(props) =>
    props.statusLike && '#fd5a44'};

  // Animatin when we move our mouse out
  &:not(:hover) {
    transition: 0.3s ease-in-out;
  }

  &:hover {
    fill: rgba(253, 90, 68, 0.67);
    cursor: pointer;
  }
`;

export const Dislike = styled.div`
  color: gray;
`;
