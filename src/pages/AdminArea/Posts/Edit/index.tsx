import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../../../components/Breadcrumb';
import FormAddPost from '../../../../components/FormAddPost';
import { PostType } from '../../../../types/post';
import { getPostById } from '../../../../services/callsApi';
import { useParams } from 'react-router-dom';

type EditProps = {
  postId: string;
};

const Edit = () => {
  const { postId }: EditProps = useParams();
  const [loaded, setLoaded] = useState(false);
  const [postData, setPostData] = useState<PostType>();

  // Get the data from the post we're editing
  useEffect(() => {
    const getData = async () => {
      await getPostById(postId).then((response) => {
        if (response.status === 200) {
          setPostData(response.data);
          setLoaded(true);
        }
      });
    };
    getData();
  }, []);

  return (
    loaded && (
      <>
        <Breadcrumb
          previous={[{ name: 'Posts list', linkTo: '/admin/posts' }]}
          currentAt={{ name: `Editing: ${postData?.title}` }}
        />
        <FormAddPost editing={true} defaultValues={postData} />
      </>
    )
  );
};

export default Edit;
