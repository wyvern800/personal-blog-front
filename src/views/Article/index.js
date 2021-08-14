import React, { Component } from 'react';

import {
  Container,
  Main,
  ArticleBody,
  ArticleHeader,
  ArticleFooter,
} from './styles';

import Title from '../../assets/components/Title';

export default class Article extends Component {
  render() {
    return (
      <>
        <Title name="Article Name" />
        <Container>
          <Main>
            <ArticleBody className="article">
              <ArticleHeader>
                <div className="article-title">header</div>
              </ArticleHeader>
              article
              <ArticleFooter>
                <div className="likes">10</div>
                <div className="author">Victor</div>
              </ArticleFooter>
            </ArticleBody>
          </Main>
        </Container>
      </>
    );
  }
}
