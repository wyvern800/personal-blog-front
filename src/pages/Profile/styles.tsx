import styled, { css } from 'styled-components';
import { LuImagePlus } from "react-icons/lu";
import { MouseEventHandler } from 'react';

export const ProfileBoard = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  position: relative;
  background-color: #141414;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    height: 150px;
  }
`;

export const AvatarMinorWrapper = styled.div`
  position: absolute;
  top: 50%;
  //left: 50;
  //transform: translateY(-50%);
  width: 165px;

  margin-left: 25px;
  z-index: 5;

  @media (max-width: 1024px) {
    margin-left: 0;
    scale: 0.70;
  }
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  //left: 23px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 165px;
  border: 8px solid #141414;
  z-index: 6;
`;

export const AvatarWrapperText = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%, -50%);
  border-radius: 50%;
  width: 165px;
  border: 8px solid #141414;
`;

type AvatarPropsType = {
  onMouseEnter: MouseEventHandler<HTMLImageElement> | undefined;
  onMouseLeave: MouseEventHandler<HTMLImageElement> | undefined
}

export const Avatar = styled.img<AvatarPropsType>`
  border-radius: 50%;
  width: 150px;
  z-index: 1;

  &:hover {
    cursor: pointer;
    filter: brightness(30%);
  }
`;

export const UserStatusWrapper = styled.div`
  position: absolute;
  right: 8px;
  bottom: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: #141414;
  padding: 10px;
  z-index: 3;
`;

export const BoardColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fb0;
  height: 50%;
`;

type UserStatusProps = {
  statusColor: string;
}
export const UserStatus = styled.div<UserStatusProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: ${({statusColor}) => statusColor};
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
`;

export const ChangeAvatar = styled(LuImagePlus)`
  position: absolute;
  right: 6px;
  top: 5px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: #f0f0f0;
  padding: 8px;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
  z-index: 3;
`;

type ChangeAvatarPropsType = {
  changeAvatarTextHidden: boolean;
}
export const ChangeAvatarText = styled.div<ChangeAvatarPropsType>`
  position: absolute;
  top: -22px;
  left: 55px;
  color: white;
  display: none;
  pointer-events: none;
  text-shadow: 1px 1px 2px black;
  text-align: center;
  font-family: 'Inter Tight', sans-serif;
  text-transform: uppercase;
  z-index: 6;

  // Show text on hover
  ${({changeAvatarTextHidden}) => !changeAvatarTextHidden && css`
      display: block;
  `}
`;

export const AvatarImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%, -50%);
  color: white;
  border: 1px solid red;
  pointer-events: none;
`;

export const ProfileName = styled.div`
  position: absolute;
  top: 0;
  //width: 200px;
  max-height: 30px;
  height: 30px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #141414;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter Tight', sans-serif;
  font-size: 1.5rem;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  z-index: 6;
`;
