import React from 'react';
import { Placeholder } from 'semantic-ui-react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const Placehold = () => {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader size='medium'>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>
  );
};

export default Placehold;
