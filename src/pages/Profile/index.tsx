import React, { useState, useEffect } from 'react';
import auth from '../../services/authService';
import { User } from '../../types/user';

const Profile = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const get = async () => {
      auth.getCurrentUser().then((response) => {
        setUser(response.data);
      }).catch((error) => {
        console.error(error);
      });
    };
    get();
  }, []);

  return (<>Profile de {user?.username}</>);
};

export default Profile;
