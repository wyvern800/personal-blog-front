import styled, { css } from 'styled-components';

import { IoHeart } from 'react-icons/io5';

import { IconProps } from '../../types/icontype';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type LikesProps = {
  userLogged: boolean;
};

export const Likes = styled.div<LikesProps>`
  font-size: 14px;

  ${(props) =>
    !props.userLogged &&
    css`
      margin-left: 15px;
    `}
`;

export const LikeButton = styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
`;

export const DislikeIcon = styled(IoHeart)<IconProps>`
  font-size: 2rem;
  border: 2px solid #1f1f1e;
  border-radius: 15px;
  padding: 5%;
  margin-right: 3px;
  transition: scale 0.3s ease-in-out;

  @keyframes heartbeatdislike {
    0% {
      transform: scale(1.015);
    }
    40% {
      transform: scale(1.01);
    }
    100% {
      transform: scale(1);
    }
  }

  // Animatin when we move our mouse out
  &:not(:hover) {
    transition: 0.3s ease-in-out;
  }

  &:hover {
    fill: rgba(128, 128, 128, 0.65);
    cursor: pointer;
  }

  ${(props) =>
    !props.likeAnimation &&
    css`
      animation: heartbeatdislike 1s none;
    `};
`;

export const LikeIcon = styled(IoHeart)<IconProps>`
  font-size: 2rem;
  //border: 2px solid #1f1f1e;
  border-radius: 15px;
  padding: 5%;
  margin-right: 3px;

  fill: ${(props) => props.statusLike && '#fd5a44'};

  ${(props) =>
    props.statusLike
      ? css`
          transform: scale(1.015);
        `
      : css`
          transform: scale(1);
        `}

  @keyframes heartbeat {
    0% {
      transform: scale(0.75);
      fill: rgba(128, 128, 128, 0.65);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(0.75);
    }
    60% {
      transform: scale(1);
      fill: #954f46;
    }
    80% {
      transform: scale(0.75);
    }
    100% {
      transform: scale(1.015);
      fill: ${(props) => props.statusLike && '#fd5a44'};
    }
  }

  // Animatin when we move our mouse out
  &:not(:hover) {
    transition: 0.3s ease-in-out;
  }

  &:hover {
    fill: rgba(253, 90, 68, 0.67);
    cursor: pointer;
  }

  ${(props) =>
    props.likeAnimation &&
    css`
      animation: heartbeat 1s none;
    `};

  ${(props) =>
    props.statusLike
      ? css`
          transform: scale(1.015);
        `
      : css`
          transform: scale(1);
        `}
`;

export const Dislike = styled.div`
  color: gray;
`;
