import React from 'react';
import ReservationsPage from './ReservationsPage';
import style from '../css/reservationspage.module.css'

const Reservations = () => (
    <div>

        <div className="">

        </div>
        <div className={style.reservationHeadingContai}>
            <h1>My Reservations</h1>
        </div>
        <div className="">
            <ReservationsPage />
        </div>

    </div>

);

export default Reservations;