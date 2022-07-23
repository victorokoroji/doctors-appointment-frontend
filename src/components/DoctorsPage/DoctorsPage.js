import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import doctors from './doctorsInfo';
// import Sidebar from './Sidebar';
import classes from './docPage.module.css';

const DoctorsPage = () => {
  const doctorsList = doctors.map((doctor) => (
    <div key={doctor.id}>
      <Link to={`/doctors/${doctor.id}`} className={classes.Doctors}>
        <div className="d-flex flex-column align-items-center">
          <img src={doctor.image} alt={doctor.name} className={`rounded-circle ${classes.img}`} />
          <h5 className={`text-dark p-4 ${classes.border}`}>{doctor.name}</h5>
          <p className="text-secondary mt-3">
            <strong>Speciality:&nbsp;</strong>
            {doctor.speciality}
          </p>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="container text-center">
      <div>
        <h3>LIST OF DOCTORS</h3>
        <p className="text-secondary">Please select a doctor to view details</p>
      </div>
      {/* {loading && <span className="spinner-border spinner-border-lg" />} */}
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
  );
};

export default DoctorsPage;

/** <div className={styles.sidebar}>
      <Sidebar />
    </div>
    <div className={styles.page}>
      <Row className={styles.main}>
        {doctors.map((doctor, i) => {
          const {
            id, name, image, speciality, desc,
          } = doctor;
          return i !== 0 ? (
            <Col>
              <Card style={{ width: '14rem', height: '100%' }} className="mx-auto" key={id}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title className="fw-bold">{name}</Card.Title>
                  <Card.Text>{speciality}</Card.Text>
                  <Card.Text>{desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ) : '';
        })}
      </Row>
    </div>
  </>
*/
