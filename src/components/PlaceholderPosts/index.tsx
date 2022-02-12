import React from 'react';
import { Placeholder } from 'semantic-ui-react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import { Wrapper, PostWrap } from './styles';

const PlaceholderPosts = () => {
  return (
    <Wrapper>
      <PostWrap>
      <Segment>
        <Dimmer active inverted>
          <Loader size="mini">Loading</Loader>
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
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
