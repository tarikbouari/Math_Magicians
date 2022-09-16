import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => (
  <div className={styles.containerNav}>
    <nav className={styles.navbar}>
      <span className={styles.logo}>
        <Link to="/"> Math Magicians</Link>
        {' '}
      </span>
      <ul className={styles.boxlist}>
        <li>
          {' '}
          <NavLink to="/">Home </NavLink>
          {' '}
        </li>
        <li>
          {' '}
          <NavLink to="calculator">Calculator </NavLink>
        </li>
        <li><NavLink to="quotes">Quotes </NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Nav;
