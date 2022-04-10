import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { IoMdAddCircleOutline } from 'react-icons/io';

export const Search = styled.form`
  display: flex;
  margin: 0.5%;
`;

export const Button = styled.button`
  margin: 0.5%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: rgba(26, 27, 31);
  border-radius: 5px;
`;

export const Input = styled.input`
  outline: none;
  border: 0;
  margin: 0.5%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PostsList = styled.ul`
  margin: 0.5%;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
`;

export const Controls = styled.div`
  margin: 0.2%;
  display: flex;
  justify-content: space-evenly;
`;

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(124, 131, 128, 0.2);
  width: 100%;
  height: fit-content;
  min-height: 50px;
  max-height: 50px;

  @media only screen and (max-width: 600px) {
    min-height: 25px;
    max-height: 25px;
  }

  align-items: center;
  justify-content: space-between;

  padding: 1.5%;

  border: 0.1em solid #3c3c3c;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  border-radius: 10px;

  &:hover {
    transition: background-color, border-color 0.3s ease-in-out;
    background-color: rgba(54, 54, 54, 0.24);
    border: 2px solid #fb0;
    cursor: pointer;
  }

  // Animatin when we move our mouse out
  &:not(:hover) {
    transition: background-color, border-color 0.3s ease-in-out;
  }

  &:not(:first-child) {
    margin-top: 1%;
  }
`;

export const LinkToPost = styled(Link)`
  margin: 0;
  padding: 0;
  width: 90%;

  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: gray;
  }
`;

export const Delete = styled(MdDelete)`
  font-size: 25px;
  fill: rgba(255, 51, 51, 0.8);

  &:hover {
    fill: rgba(255, 51, 51, 0.3);
    cursor: pointer;
  }
`;

export const Edit = styled(FiEdit)`
  font-size: 25px;
  fill: rgba(255, 184, 51, 0.8);

  &:hover {
    fill: rgba(255, 184, 51, 0.3);
    cursor: pointer;
  }
`;

export const AddButton = styled(IoMdAddCircleOutline)`
  margin-left: 0.5%;
  font-size: 25px;
  fill: rgba(0, 158, 0, 1);

  &:hover {
    fill: rgba(0, 158, 0, 0.3);
    cursor: pointer;
  }
`;
