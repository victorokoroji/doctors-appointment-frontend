import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle, BsFillCaretLeftFill } from 'react-icons/bs';
// import PropTypes from 'prop-types';
import doctors from './doctorsInfo';
import Sidebar from './Sidebar';
import styles from './docPage.module.css';

const Doctor = () => {
  // const { id } = useParams();
  // const doctor = doctors.find((item) => item.id === id);
  const doctor = doctors[0];
  const {
    name, image, speciality, desc, city, charges,
  } = doctor;

  return (
    <>
      <Sidebar />
      <div className={styles.detailContainer}>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 col-12">
              <img
                width="450px"
                height="450px"
                src={image}
                alt={name}
              />
            </div>
            <div className="col-md-6 col-12">
              <div className={`text-end ${styles.doctorInfo}`}>
                <h1 className="fw-bolder fs-4">{name}</h1>
                <p className={styles.desc}>{desc}</p>
              </div>
              <table className="table table-striped mt-5">
                <tbody>
                  <tr>
                    <td>City</td>
                    <td>{city}</td>
                  </tr>
                  <tr>
                    <td>Specialization</td>
                    <td>{speciality}</td>
                  </tr>
                  <tr>
                    <td>Charges</td>
                    <td>{charges}</td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-end">
                <div className={`${styles.reserve} ${styles.reserveDiv} p-2 d-flex`}>
                  <Link
                    to="/reserve"
                    state={doctor}
                    className={`btn btn-light ${styles.reserveBtn}`}
                  >
                    Reserve
                  </Link>
                  <BsArrowRightCircle className="mx-2" size={40} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/doctors">
          <div className={`${styles.backNav} d-flex justify-content-center align-items-center`}>
            <BsFillCaretLeftFill />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Doctor;
