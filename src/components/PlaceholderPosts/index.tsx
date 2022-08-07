import React from 'react';
import { Placeholder } from 'semantic-ui-react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import { Wrapper, PostWrap } from './styles';

const PlaceholderPosts = () => {
  return (
    <Wrapper>
      <PostWrap>
        <Placeholder fluid>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
        </Placeholder>
      </PostWrap>
      <PostWrap>
        <Placeholder fluid>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
        </Placeholder>
      </PostWrap>
      <PostWrap>
        <Placeholder fluid>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
        </Placeholder>
      </PostWrap>
    </Wrapper>
  );
};

export default PlaceholderPosts;
