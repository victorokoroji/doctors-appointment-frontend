import React from 'react';
import Doctor from './Doctor';
import doctors from './doctorsInfo';

function DoctorsPage() {
  return (
    <>
      {
        doctors.map((doctor) => {
          const {
            id, name, img, speciality, desc,
          } = doctor;
          return <Doctor key={id} name={name} img={img} speciality={speciality} desc={desc} />;
        })
      }
    </>
  );
}

export default DoctorsPage;
