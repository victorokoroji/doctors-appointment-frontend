import React from 'react';
import PropTypes from 'prop-types';

const Doctor = ({
  name, image, speciality, desc,
}) => (
  <div className="card" style={{ width: '18rem' }}>
    <img src={image} className="card-img-top" alt="Doctor" />
    <div className="card-body">
      <h4 className="card-title">{name}</h4>
      <small>{speciality}</small>
      <p className="card-text">{desc}</p>
    </div>
  </div>
);

Doctor.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Doctor;
