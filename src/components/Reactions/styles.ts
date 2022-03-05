import styled from 'styled-components'

import { IoHeart, IoHeartOutline } from "react-icons/io5";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LikeButton = styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
`;

export const LikeIcon = styled(IoHeart)`
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
    border: 2px solid #fd5a44;
    fill: #fd5a44;
    cursor: pointer;
  }
`;

export const Dislike = styled.div`
  color: gray;
`;
