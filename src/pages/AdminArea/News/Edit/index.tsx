import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../../../components/Breadcrumb';
import { getNewsById } from '../../../../services/callsApi';
import { useParams } from 'react-router-dom';
import { NewsType } from '../../../../types/news';
import FormAddNews from '../../../../components/FormAddNews';

type EditProps = {
  newsId: string;
};

const Edit = () => {
  const { newsId }: EditProps = useParams();
  const [loaded, setLoaded] = useState(false);
  const [newsData, setNewsData] = useState<NewsType>();

  // Get the data from the post we're editing
  useEffect(() => {
    const getData = async () => {
      await getNewsById(newsId).then((response) => {
        if (response.status === 200) {
          setNewsData(response.data);
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
          previous={[{ name: 'Newsletter list', linkTo: '/admin/newsletter' }]}
          currentAt={{ name: `Editing: ${newsData?.title}` }}
        />
        <FormAddNews editing={true} defaultValues={newsData} />
      </>
    )
  );
};

export default Edit;
