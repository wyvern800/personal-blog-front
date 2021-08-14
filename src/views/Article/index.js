import React, { Component } from 'react';

import { Container } from './styles';

export default class Article extends Component {
  render() {
    return (
      <Container>
        <div className="main">
          <section className="article">
          <div className="article-header">
              <div className="article-title">header</div>
            </div>
            article
            <div className="article-footer">
              <div className="likes">10</div>
              <div className="author">Victor</div>
            </div>
          </section>
        </div>
      </Container>
    );
  }
}
