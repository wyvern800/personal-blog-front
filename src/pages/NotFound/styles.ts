import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.1%;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Notfound = styled.div`
  font-size: 5rem;
  color: #ff6857;
  font-weight: bold;
  font-style: italic;
`;

export const Msg = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 25px;
`;

export const Button = styled(Link)`
  padding: 10px;
  background-color: rgba(124, 131, 128, 0.2);
  border: 2px solid rgba(124, 131, 128, 0.2);
  font-weight: bold;
  border-radius: 3px;
  border: 0;
  cursor: pointer;
  color: gray;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    background-color: transparent;
    border: 2px solid #fb0;
    color: #fb0;
  }
`;
