import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Table = () => {
  const [state, setState] = useState({ total: '', next: null, operation: null });

  const clikHandler = (e) => {
    const { value } = e.target;
    const data = calculate(state, value);
    setState(data);
  };

  const { total, next, operation } = state;
  return (
    <div className="big-container">
      <h1>Lets do some Maths</h1>
      <div className="container">
        <div className="render">
          {next}
          {operation}
          {total}
        </div>
        <div className="row1">
          <input type="button" onClick={clikHandler} className="ac" value="AC" />
          <input type="button" onClick={clikHandler} className="ac" value="+/-" />
          <input type="button" onClick={clikHandler} className="ac" value="%" />
          <input type="button" onClick={clikHandler} className="ac" value="÷" />
        </div>

        <div className="row2">
          <input type="button" onClick={clikHandler} className="ac" value="7" />
          <input type="button" onClick={clikHandler} className="plus" value="8" />
          <input type="button" onClick={clikHandler} className="perc" value="9" />
          <input type="button" onClick={clikHandler} className="div" value="x" />
        </div>
        <div className="row3">
          <input type="button" onClick={clikHandler} className="four" value="4" />
          <input type="button" onClick={clikHandler} className="five" value="5" />
          <input type="button" onClick={clikHandler} className="six" value="6" />
          <input type="button" onClick={clikHandler} className="moins" value="-" />
        </div>

        <div className="row4">
          <input type="button" onClick={clikHandler} className="one" value="1" />
          <input type="button" onClick={clikHandler} className="two" value="2" />
          <input type="button" onClick={clikHandler} className="three" value="3" />
          <input type="button" onClick={clikHandler} className="four" value="+" />
        </div>
        <div className="row5">
          <input type="button" onClick={clikHandler} className="zero" value="0" />
          <input type="button" onClick={clikHandler} className="point" value="." />
          <input type="button" onClick={clikHandler} className="equal" value="=" />
        </div>
      </div>

    </div>

  );
};

export default Table;
