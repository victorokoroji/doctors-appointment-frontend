import React from 'react';
import style from '../css/reservationspage.module.css';
import Image from '../assets/images/reserveformdoctor.jpg';

const ReservationsPage = () => {
  const reservations = [
    {
      image: '../../src/assets/images/reserveformdoctor.jpg',
      city: 'frontend programmer',
      date: '10/09/2022',
    },
    {
      image: '../assets/images/reserveformdoctor.jpg',
      city: 'full Stack programmer',
      date: '11/09/2022',
    },
    {
      image: '../assets/images/reserveformdoctor.jpg',
      city: 'backend programmer',
      date: '12/09/2022',
    },
    {
      image: '../assets/images/reserveformdoctor.jpg',
      city: 'data scientist',
      date: '17/09/2022',
    },
    {
      image: '../assets/images/reserveformdoctor.jpg',
      city: 'full Stack programmer',
      date: '18/09/2022',
    },
  ];
  return (
    <div className={style.reserveContainer}>
      {reservations.length === 0 && (
        <h3 className={style.reserveHeading}>No reservations available!</h3>
      )}
      {
         reservations.map((item) => (
           <div className={style.reserveBody} key={item.id}>
             <img src={Image} alt="doctor" className={style.imageIcon} />
             <p className={style.reservationCity}>{item.city}</p>
             <p className={style.reservationCity}>{item.date}</p>
             <button
               type="button"
               className={style.reserveBodyButton}
             >
               Cancel
             </button>
           </div>
         ))
         }

    </div>
  );
};

export default ReservationsPage;
