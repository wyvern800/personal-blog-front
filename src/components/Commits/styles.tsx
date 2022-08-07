import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const Commit = styled.div`
  border-bottom: 1px dashed #4d4d4d;
  margin-left: 5px;
  margin-right: 5px;

  &:not(:first-child) {
    margin-top: 5px;
    padding-bottom: 5px;
  }

  &:last-child {
    border: 0;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: gray;
  font-family: 'Roboto', sans-serif;
  margin-left: 5px;
  font-size: 11px;

  &:hover {
    color: #fb0;
  }
`;

export const AuthorImg = styled.img`
  width: 8%;
  border-radius: 50%;
`;

export const Repository = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  span {
    margin-left: 5px;
    font-size: 11px;
  }
`;

export const DateBox = styled.div`
  position: relative;
`;

export const Date = styled.div`
  font-size: 10px;
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 10%;
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 5px;

  &:hover {
    opacity: 100%;
    background-color: black;
  }
`;

