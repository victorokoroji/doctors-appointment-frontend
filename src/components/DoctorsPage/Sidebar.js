import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './docPage.module.css';

const Sidebar = () => (
  <div className={styles.sidebarContainer}>
    <div className={styles.containerWrapper}>
      <div className={styles.imageContainer}>
        <img src="/assets/logo.png" alt="logo" className={styles.sidebarLogo} />
      </div>
      <ul className={styles.navigation}>
        <li className={styles.listItem}>
          <NavLink
            to="/doctors"
            className={(navLink) => (navLink.isActive ? styles.active : styles.nonActive)}
          >
            Doctors
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to="/register"
            className={(navLink) => (navLink.isActive ? styles.active : styles.nonActive)}
          >
            Reserve
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to="/login"
            className={(navLink) => (navLink.isActive ? styles.active : styles.nonActive)}
          >
            My Reservations
          </NavLink>
        </li>
      </ul>
      <ul className={styles.logoutDiv}>
        <li>
          <NavLink
            to="/login"
            className={styles.logoutLink}
          >
            Logout
          </NavLink>
        </li>
      </ul>
      <div className={styles.footer}>
        <footer>
          <p>&copy;2022</p>
        </footer>
      </div>
    </div>
  </div>
);

export default Sidebar;
