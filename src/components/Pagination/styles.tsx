import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  ul {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 920px) {
    ul {
      margin: 0;
      padding: 0;
      align-items: center;
      justify-content: center;
    }
  }

  .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
  }
  .pagination > .active > a {
    background-color: #000000;
    border-color: #000000;
    color: #fb0;
  }
  .pagination > li > a {
    border: 1px solid #444242;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: #1f1f1e;
    border-color: #1f1f1e;
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: gray;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
`;
