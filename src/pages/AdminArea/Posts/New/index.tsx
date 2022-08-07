import React from 'react';
import Breadcrumb from '../../../../components/Breadcrumb';
import FormAddPost from '../../../../components/FormAddPost';

const New = () => {
  return (
    <>
      <Breadcrumb
        previous={[{ name: 'Posts list', linkTo: '/admin/posts' }]}
        currentAt={{ name: 'Adding a new Post' }}
      />
      <FormAddPost/>
    </>
  );
};

export default New;
