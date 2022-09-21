import React from 'react';
import { NavLink } from 'react-router-dom';
import calc from '../images/clc.png';

const Home = () => (
  <div
    style={{
      margin: '5rem auto', display: 'flex', justifyContent: 'space-around', width: '80%',
    }}
  >
    <div style={{
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
    }}
    >
      <h1> ECTS Credit and German Grade calculator</h1>
      <p>
        Minim ut magna nulla officia consectetur proident dolor ipsum. Pariatur
        in deserunt magna cupidatat proident eiusmod ad.

      </p>
      <button type="button" className="btn btn-warning "><NavLink to="calculator">calculate Now</NavLink></button>
    </div>
    <div>
      <img className="imgCalc" src={calc} alt="calculator.png" />
    </div>
  </div>
);

export default Home;
