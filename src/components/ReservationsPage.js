import React from 'react'

const ReservationsPage = () => {

   const reservations = [
  {
    Image: ['./assets/images/faith.jpg'],
    city: 'frontend programmer',
    Date: '18/09/2022',
  },
  {
    Image: ['./assets/images/faith.jpg'],
    city: 'full Stack programmer',
    Date: '18/09/2022',
  },
  {
    Image: ['./assets/images/faith.jpg'],
    city: 'backend programmer',
    Date: '18/09/2022',
  },
  {
    Image: ['./assets/images/faith.jpg'],
    city: 'data scientist',
    Date: '18/09/2022',
  },
  {
    image: ['./assets/images/faith.jpg'],
    city: 'full Stack programmer',
    date: '18/09/2022',
  },
];
  return (
    <div className="reserveContainer">  
    {reservations.length === 0 && (
        <h3 className="reserveHeading">No reservations available!</h3>
      )}  
      {
         reservations.map((item) => (
            <div className="reserveBody">
              <img src={item.image} alt="doctor" className="" />
              <p className="mt-8 font-bold">{item.city}</p>
              <p className="mt-8 font-bold">{item.date}</p>
              <button
                type="button"
                onClick={() => cancelReservation(item.id)}
                className="reserveBodyButton"
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