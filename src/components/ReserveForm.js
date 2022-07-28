import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBars } from 'react-icons/fa';
import style from '../css/reserveform.module.css';
import Sidebar from './DoctorsPage/Sidebar';
import { getAppointment, createAppointment } from '../redux/appointments/appointments';
import { getDoctors } from '../redux/doctors/doctors';

const ReserveForm = () => {
  const [selectValue, setSelectValue] = useState(0);
  const [optionValue, setOptionValue] = useState(2);
  console.log(selectValue, optionValue);
  const appointments = useSelector((state) => state.appointmentReducer);
  const doctorsList = useSelector((state) => state.doctorsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const toggleMenu = () => {
    const navMenu = document.querySelector('#toggler');
    navMenu.classList.toggle(style.sidebarContainer);
  };
  return (
    <>
      <div id="toggler" className={style.sidebarContainer}>
        <Sidebar />
      </div>

      <section className={style.reserveContainer}>
        <div className={style.mainBody}>
          <div className={style.sideButton}>
            <button type="button" className={style.hamburger} onClick={toggleMenu}>
              <FaBars />
            </button>
          </div>
          <div className={style.heading}>
            <h4 className={style.reserveFormHeading}> Book Appointment </h4>
          </div>
          <div className={style.bodyText}>
            <p className={style.paragraph}>
              We have different doctors from different parts of the world.
              <br />
              If you wish to find out if we have a doctor who is available
              in your city, please use the selector below
            </p>
          </div>
          <div className={style.formBody}>
            <div className={style.formBlock}>
              <input
                type="text"
                placeholder="city"
                value="city"
                className={style.formInput}
              />
              <select
                name="availableDoctors"
                id="availableDoctors"
                value={selectValue}
                className={style.selectDoctors}
              >
                <option value="" disabled> Choose a Doctor </option>
                {
                  doctorsList.map((doctor) => (
                    <option
                      key={doctor.id}
                      value={doctor.id}
                    >
                      {doctor.name}
                    </option>
                  ))
                }
              </select>
              <input
                type="date"
                value="dd/mm/yy"
                className={style.inputDate}
              />
              <br />
            </div>

          </div>
          <div className={style.buttonBody}>
            <input
              type="submit"
              value="Book Now"
              className={style.bookButton}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReserveForm;
