import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './docPage.module.css';
import doctors from './doctorsInfo';

const Doctor = () => {
  const doctor = doctors[0];
  const {
    name, image, speciality, desc,
  } = doctor;

  return (
    <div className="container">
      <div>
        <img src={image} alt={name} />
        <div>
          <h2>
            {name}
          </h2>
          <p className={`${styles.badge} ${styles.badgeSecondary}`}>
            Appointment Fee
          </p>
          <p className={styles.badge}>
            Qualification: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {speciality}
          </p>
          <p className={`${styles.badge} ${styles.badgeSecondary}`}>
            Experience: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {desc}
          </p>
          <li>
            <Link
              to="/"
              className={styles.btn}
            >
              Reserve Appointment
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

/** Doctor.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
 */

export default Doctor;
