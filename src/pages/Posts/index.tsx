import React, { useState, useEffect } from 'react';
import { Container, Main } from './styles';
import AllPosts from '../../components/AllPosts';

import Title from '../../components/Title';

import Breadcrumb from '../../components/Breadcrumb';

import { CrumbType } from '../../types/crumb';

const Posts = () => {
  const currentAt: CrumbType = { name: 'Posts', linkTo: '/posts' };

  return (
    <>
      <Title name="All posts" />
      <Breadcrumb currentAt={currentAt} />
      <Container>
        <Main>
          <AllPosts firstSeparated={false} width={'80%'} />
        </Main>
      </Container>
    </>
  );
};

export default Posts;
