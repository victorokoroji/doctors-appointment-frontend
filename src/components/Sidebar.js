import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const activeStyles = {
    backgroundColor: 'rgb(214, 125, 8)',
    color: '#fff',
  };

  return (
    <aside
      className="vh-100 fixed-top position-fixed aside"
      style={{
        width: '15%',
        backgroundColor: 'rgb(50, 174, 205)',
      }}
    >
      <div>
        <NavLink to="/">
          <img
            src="/assets/stethoscope-2.png"
            alt="sidebar"
            className="w-75 mt-5 mx-auto d-block logo"
          />
        </NavLink>
        <ul className="list-unstyled px-5">
          <li>
            <NavLink
              to="/login"
              activeStyle={activeStyles}
              className="text-black text-decoration-none"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              activeStyle={activeStyles}
              className="text-black text-decoration-none"
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
