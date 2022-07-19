import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const professions = [
    'Physiotherapist',
    'Dentist',
    'Physical therapist',
    'Orthoptist',
    'Pharmacist',
  ];

  return (
    <main>
      <div className="d-flex flex-column justify-content-center align-items-center h-75">
        <h2
          className="text-center text-white fs-2 fs-bold text-uppercase"
        >
          Welcome to booking appointment site
        </h2>
        <div className="d-flex mt-3">
          <select className="me-4 px-3 py-2 rounded">
            <option value="default" disable hidden className="">Select a specialist</option>
            {
              professions.map((profession) => (
                <option key={profession} value={profession}>{profession}</option>
              ))
            }
          </select>
          <Link
            to="/appointment/new"
            className="px-3 py-2 bg-white rounded"
          >
            Add Appointment
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
