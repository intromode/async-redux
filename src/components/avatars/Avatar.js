import React from 'react';
import PropTypes from 'prop-types';

//maybe want the ID to look for single avatar?
function Avatar({ name, photoUrl }) {
  return (
    <>
    <img src={photoUrl}/>
    <p>{name}</p>
    </>
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
};

export default Avatar;
