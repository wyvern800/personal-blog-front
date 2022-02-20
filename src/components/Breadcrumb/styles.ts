import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0.5%;

  .section {
    color: #fb0;
  }

  border-bottom: 1px solid #4d4d4d;

  .ui {
    margin-left: 2%;
  }
`;

export const CrumbLink = styled(Link)`
  text-decoration: none;
  color: gray;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  span {
    color: gray;

    &:hover {
     color: black;
    }
  }
`;
