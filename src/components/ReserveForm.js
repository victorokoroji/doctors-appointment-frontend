import React from 'react';
import './css/reserveform.css';
import { FaBars } from 'react-icons/fa';

const ReserveForm = () => (
  <section className="reserve-container">
    <div className="main-body">
      <div className="side-button">
        <button type="button" className="hamburger">
          <FaBars />
        </button>
      </div>
      <div className="heading">
        <h4 className="reserve-form-heading"> Book Appointment </h4>
      </div>
      <div className="body-text">
        <p className="paragraph">
          We have different doctors from different parts of the world.
          <br />
          If you wish to find out if we have a doctor who is available
          in your city, please use the selector below
        </p>
      </div>
      <div className="form-body">
        <div className="form-block lg:block">
          <input
            type="text"
            placeholder="city"
            value="city"
            className="form-input"
          />

          <select
            name="availableDoctors"
            id="availableDoctors"
            className="select-doctors"
          >
            <option value="Faith"> Choose a Doctor </option>
            <option value="Faith"> Dr.Faith </option>
            <option value="Lyneth"> Dr.Lyneth </option>
            <option value="Abdul"> Dr.Abdul </option>
          </select>

          <input
            type="date"
            value="dd/mm/yy"
            className="input-date"
          />
          <br />
        </div>

      </div>
      <div className="button-body">
        <input
          type="submit"
          value="Book Now"
          className="book-button"
        />
      </div>
    </div>
  </section>
);

export default ReserveForm;
