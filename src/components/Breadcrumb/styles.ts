import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  margin-left: 1%;
  padding: 0.5%;

  .section {
    color: #fb0;
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
