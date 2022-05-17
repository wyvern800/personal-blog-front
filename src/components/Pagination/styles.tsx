import styled from 'styled-components';

export const Wrapper = styled.div`
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
    color: #fff;
  }
  .pagination > li > a {
    border: 1px solid #000000;
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
    background-color: #000000;
    border-color: #000000;
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: #000000;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
`;
