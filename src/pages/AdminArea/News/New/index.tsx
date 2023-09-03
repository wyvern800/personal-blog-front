import React from 'react';
import Breadcrumb from '../../../../components/Breadcrumb';
import FormAddNews from '../../../../components/FormAddNews';

const New = () => {
  return (
    <>
      <Breadcrumb
        previous={[{ name: 'Newsletter list', linkTo: '/admin/newsletter' }]}
        currentAt={{ name: 'Adding a newsletter' }}
      />
      <FormAddNews/>
    </>
  );
};

export default New;
