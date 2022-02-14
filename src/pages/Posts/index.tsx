import React, { useState, useEffect } from 'react';
import { Container, Main } from './styles';
import AllPosts from '../../components/AllPosts';

import Title from '../../components/Title';

import Breadcrumb from '../../components/Breadcrumb';

const Posts = () => {

  return (
    <>
      <Title name="All posts" />
      <Breadcrumb currentAt={{ name: 'Posts', linkTo: '/posts' }} />
      <Container>
        <Main>
          <AllPosts firstSeparated={false} width={'80%'} />
        </Main>
      </Container>
    </>
  );
};

export default Posts;
