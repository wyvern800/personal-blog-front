import React, { useState, useEffect } from 'react';
import auth from '../../services/authService';
import { User } from '../../types/user';
import {
  ProfileBoard,
  AvatarWrapper,
  Avatar,
  UserStatusWrapper,
  BoardColor,
  UserStatus,
  ChangeAvatar,
  AvatarMinorWrapper,
  ChangeAvatarText,
  ProfileName
} from './styles';

const Profile = () => {
  const [user, setUser] = useState<User>();
  const [changeAvatarTextHidden, setAvatarTextHidden] = useState<boolean>(true);

  useEffect(() => {
    const get = async () => {
      auth
        .getCurrentUser()
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    get();
  }, []);

  const getStatusColor = (status: any): string => {
    const _status: any = {
      online: '#a7ff42',
      offline: '#ff4242',
      busy: '#ffd942',
    };
    return _status[status] || 'black';
  };

  return (
    <>
      {/*Profile de {user?.username}*/}
      <ProfileBoard>
        <BoardColor></BoardColor>
        <ProfileName>{user?.username}</ProfileName>
        <AvatarMinorWrapper>
          <AvatarWrapper>
            <Avatar
              onMouseEnter={() => setAvatarTextHidden(false)}
              onMouseLeave={() => setAvatarTextHidden(true)}
              src="https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp"
            />
            <UserStatusWrapper>
              <UserStatus statusColor={getStatusColor('online')}></UserStatus>
            </UserStatusWrapper>
            <ChangeAvatar>
              <UserStatus statusColor={getStatusColor('online')}></UserStatus>
            </ChangeAvatar>
          </AvatarWrapper>

          <ChangeAvatarText changeAvatarTextHidden={changeAvatarTextHidden}>
              change
              <br />
              avatar
            </ChangeAvatarText>
        </AvatarMinorWrapper>
      </ProfileBoard>
    </>
  );
};

export default Profile;
