import React, { Component } from 'react';

import { Container, Main } from './styles';
import Title from '../../assets/components/Title';

import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const response = await api.get('/posts');

    this.setState({ posts: response.data });
  }

  render() {
    const { posts } = this.state;

    return (
      <>
        <Title name="Home" />
        <Container>
          <Main className="main">
            <section>
              {posts.map((post) => (
                <Link key={post.id} to={`/articles/${post.id}`}>
                  <div className="article-card">{post.title}</div>
                </Link>
              ))}
            </section>
            <aside>aside</aside>
          </Main>
        </Container>
      </>
    );
  }
}
