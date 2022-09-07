const Table = () => (
  <div className="container">
    <div className="render">
      <p>0</p>
    </div>
    <div className="row1">
      <input type="button" className="ac" value="AC" />
      <input type="button" className="ac" value="+/-" />
      <input type="button" className="ac" value="%" />
      <input type="button" className="ac" value="÷" />
    </div>

    <div className="row2">
      <input type="button" className="ac" value="7" />
      <input type="button" className="plus" value="8" />
      <input type="button" className="perc" value="9" />
      <input type="button" className="div" value="X" />
    </div>
    <div className="row3">
      <input type="button" className="four" value="4" />
      <input type="button" className="five" value="5" />
      <input type="button" className="six" value="6" />
      <input type="button" className="moins" value="-" />
    </div>

    <div className="row4">
      <input type="button" className="one" value="1" />
      <input type="button" className="two" value="2" />
      <input type="button" className="three" value="3" />
      <input type="button" className="four" value="+" />
    </div>
    <div className="row5">
      <input type="button" className="zero" value="0" />
      <input type="button" className="point" value="." />
      <input type="button" className="equal" value="=" />
    </div>
  </div>
);

export default Table;
