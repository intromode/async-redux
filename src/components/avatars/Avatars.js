import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

//does this just have to be called list since thats what its called in the state?
function Avatars({ avatarList }) {
  const avatars = avatarList.map(avatar => {
    return (
      <li key={avatar.name}>
        <Avatar avatar={avatar} />
      </li>
    );
  });

  return (
    <ul>
      { avatars } 
    </ul>
  );
}

Avatars.propTypes = {
  avatarList: PropTypes.array.isRequired
};

export default Avatars;
