import React from 'react';

import { Container, Main } from './styles';
import Title from '../../components/Title';
import AllPosts from '../../components/AllPosts';

const Home = () => {
  return (
    <>
      <Title name="Home" />
      <Container>
        <Main className="main">
          <section>
            <AllPosts firstSeparated={true}/>
          </section>
          <aside>aside</aside>
        </Main>
      </Container>
    </>
  );
};

export default Home;
