import React from 'react';
import PropTypes from 'prop-types';

const Doctor = ({
  name, img, speciality, desc,
}) => (
  <main>
    <div className="">
      <img src={img} alt="Doctor" />
      <div>
        <h4>{name}</h4>
        <small>{speciality}</small>
        <p>{desc}</p>
      </div>
    </div>
  </main>
);

Doctor.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Doctor;
