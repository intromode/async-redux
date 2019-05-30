import React from 'react';
import PropTypes from 'prop-types';

//maybe want the ID to look for single avatar?
//do i need to destructor name and photoUrl once we've brought in just the single avatar?
function Avatar({ avatar }) {

  const { name, photoUrl } = avatar;

  return (
    <>
    <img src={photoUrl}/>
    <p>{name}</p>
    </>
  );
}

// could also do:
// PropTypes.shape({
//   name:,
//   photoUrl
// }).isRequired

Avatar.propTypes = {
  avatar: PropTypes.object.isRequired,
};

export default Avatar;
