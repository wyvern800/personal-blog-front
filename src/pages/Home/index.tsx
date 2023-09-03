import React from 'react';

import { Container, Main } from './styles';
import Title from '../../components/Title';
import AllPosts from '../../components/AllPosts';
import Commits from '../../components/Commits';
import NewsLetter from '../../components/NewsLetter';

const Home = () => {
  return (
    <>
      <Title name="Home" />
      <Container>
        <Main className="main">
          <section>
            <NewsLetter />
            <AllPosts firstSeparated={true} width={'100%'} />
          </section>
          <aside>
            <Commits />
          </aside>
        </Main>
      </Container>
    </>
  );
};

export default Home;
