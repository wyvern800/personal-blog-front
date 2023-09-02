import styled from 'styled-components';
import { RiChatDeleteLine } from "react-icons/ri";
import { GoReport } from "react-icons/go"
type WrapperProps = {
  width: string;
};

export const Wrapper = styled.div<WrapperProps>`
  border: 1px solid #4d4d4d;
  width: ${(props) => props.width && props.width};
  border-radius: 7px;
  margin-bottom: 10px;

  // Celular
  @media only screen and (max-width: 600px) {
    min-width: 100%;
  }
`;

export const Comment = styled.div`
  display: flex;
  margin: 1%;

  span {
    margin-left: 0.5%;
  }
`;

export const Author = styled.div`
  display: flex;
  font-weight: bold;
  //margin-left: 0.5%;
  align-items: center;

  span {
    font-weight: normal;
    font-size: 0.75rem;
  }
`;

export const Avatar = styled.img`
  width: 3%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 8px;
`;

export const ChatBox = styled.input<any>`
  border-radius: 7px;
  outline: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: rgba(124,131,128,0.2);
  -webkit-appearance: none;
  border: 0;
  padding: 10px 20px;
  margin-top: 10px;

  &:focus {
    outline: none;
  }

  &:disabled {
    pointer-events: none;
  }
`;

export const Container = styled.div`
  max-height: 233px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const NoComments = styled.div`
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RemoveComment = styled(RiChatDeleteLine)`
  font-size: 1.15rem;
  opacity: 0.2;

  &:hover {
    fill: #ff5252;
    cursor: pointer;
    opacity: 1;
  }
`;

export const ReportComment = styled(GoReport)<any>`
  font-size: 1rem;
  opacity: 0.2;

  &:hover {
    fill: #ff5252;
    cursor: pointer;
    opacity: 1;
  }
`;

export const CommentActions = styled.div`
  margin-left: 10px;
  gap: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthorName = styled.div`
  &:hover {
    color: #fb0;
    cursor: pointer;
  }
`;

export const CommentContent = styled.div`
  width: 90%;
  max-width: 90%;
  word-wrap: break-word;
`;

export const InnerModal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-top: 20px;
  outline: none;

  @media (max-width: 600px) {
    gap: 0;
  }
`;
