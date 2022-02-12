import React, { Component } from 'react';
import api from '../../services/api';

import {
  Container,
  Main,
  ArticleBody,
  ArticleHeader,
  ArticleFooter,
} from './styles';

import Title from '../../assets/components/Title';

export default class Article extends Component {
  state = {
    post: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/posts/${id}`);

    console.log(response.data);

    this.setState({ post: response.data });
  }

  render() {
    const { post } = this.state;

    return (
      <>
        <Title name="Article" />
        <Container>
          <Main>
            <ArticleBody className="article">
              <ArticleHeader>
                <div className="article-title">{post.title}</div>
              </ArticleHeader>
              {post.content}
              <ArticleFooter>
                <div className="likes">{post.likes + " pessoa"+(post.likes > 1 ? "s gostaram" : " gostou")+" deste artigo" }</div>
                <div className="author">{post.author}</div>
              </ArticleFooter>
            </ArticleBody>
          </Main>
        </Container>
      </>
    );
  }
}
