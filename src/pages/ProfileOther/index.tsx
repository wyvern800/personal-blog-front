import React, { useState, useEffect } from 'react';
import auth from '../../services/authService';
import { User } from '../../types/user';
import { useParams } from 'react-router-dom';
import { Wrapper } from './styles';

type ParamsType = {
  username: string;
};

const ProfileOther = (): JSX.Element => {
  const { username } = useParams<ParamsType>();
  const [user, setUser] = useState<User>();
  const [loaded, setLoaded] = useState<Boolean>(false);

  useEffect(() => {
    const get = async () => {
      auth
        .getProfileByUsername(username)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoaded(true);
        });
    };
    get();
  }, [username]);

  return (
    loaded && (
      <Wrapper>
        <span>Profile de {user?.username}</span>
        <span>E-mail: {user?.email}</span>
      </Wrapper>
    )
  );
};

export default ProfileOther;
