import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import doctors from './doctorsInfo';
import Sidebar from './Sidebar';
import styles from './docPage.module.css';

const DoctorsPage = () => {
  const doctorsList = doctors.map((doctor) => (
    <div key={doctor.id}>
      <Link to={`/doctors/${doctor.id}`} className={styles.doctorSingle}>
        <div className="d-flex flex-column align-items-center">
          <img src={doctor.image} alt={doctor.name} className={`rounded-circle ${styles.img}`} />
          <h5 className={`text-dark p-4 ${styles.border}`}>{doctor.name}</h5>
          <p className="text-secondary mt-3">
            <strong>Speciality:&nbsp;</strong>
            {doctor.speciality}
          </p>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <Sidebar />
      <div className={styles.doctorsContainer}>
        <div className={styles.header}>
          <h3>LIST OF DOCTORS</h3>
          <p className="text-secondary">Please select a doctor to view details</p>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {doctorsList}
        </Carousel>
      </div>
    </>
  );
};

export default DoctorsPage;
