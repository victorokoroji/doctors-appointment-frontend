import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './docPage.module.css';

const Sidebar = () => (
  <div className={styles.sidebarContainer}>
    <div className={styles.imageContainer}>
      <img src="/assets/sidebar-icon.png" alt="logo" className={styles.sidebarLogo} />
    </div>
    <div className={styles.navigation}>
      <ul className={styles.loginLogout}>
        <li className={styles.listItem}>
          <NavLink to="/login" className={styles.navLink}>
            Login
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to="/register" className={styles.navLink}>
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
    <div className={styles.footer}>
      <footer>
        <p>&copy;2022</p>
      </footer>
    </div>
  </div>
);

export default Sidebar;

/**
const Sidebar = () => (
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
);

export default Sidebar;
*/
