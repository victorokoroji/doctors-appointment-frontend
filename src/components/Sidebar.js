import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { FaBars } from 'react-icons/fa';
import socialLinks from './socialLinks';
import styles from '../css/docPage.module.css';
import { logout } from '../redux/login/login';
import Button from './Button';

const Sidebar = () => {
  const myData = useSelector((state) => state.loginReducer, shallowEqual);

  const toggleMenu = () => {
    const navMenu = document.querySelector('nav');
    navMenu.classList.toggle(styles.toggle);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };
  if (myData.status === 204) {
    localStorage.removeItem('jwt-token');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  }

  return (
    <>
      <button type="button" className={styles.hamburger} onClick={toggleMenu}>
        <FaBars />
      </button>
      <nav className={`${styles.sidebarContainer} ${styles.toggle}`}>
        <div className={`${styles.containerWrapper} ${styles.toggle}`}>
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
                to="/reserve"
                className={(navLink) => (navLink.isActive ? styles.active : styles.nonActive)}
              >
                Reserve
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <NavLink
                to="/reservations"
                className={(navLink) => (navLink.isActive ? styles.active : styles.nonActive)}
              >
                My Reservations
              </NavLink>
            </li>
          </ul>
          <div className={`d-flex flex-column align-items-center ${styles.socialLogoutDiv}`}>
            <ul className={styles.logoutDiv}>
              <li>
                <Button type="button" className={styles.logoutLink} onClick={() => handleLogout()}>
                  Logout
                </Button>
              </li>
            </ul>
            <ul className="d-flex">
              {socialLinks.map((link) => {
                const { id, url, icon } = link;
                return (
                  <li key={id}>
                    <Link to={url} className={`m-1 ${styles.socialLink}`} target="_blank">
                      {icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.footer}>
            <footer>
              <p>&copy;2022</p>
            </footer>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
