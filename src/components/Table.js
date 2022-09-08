import React from 'react';
import calculate from '../logic/calculate';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: '', next: null, operation: null };
    this.clikHandler = this.clikHandler.bind(this);
  }

  clikHandler(e) {
    const { value } = e.target;
    const data = calculate(this.state, value);
    this.setState(data);
  }

  render() {
    const { total, next, operation } = this.state;
    return (

      <div className="container">
        <div className="render">
          {next}
          {operation}
          {total}
        </div>
        <div className="row1">
          <input type="button" onClick={this.clikHandler} className="ac" value="AC" />
          <input type="button" onClick={this.clikHandler} className="ac" value="+/-" />
          <input type="button" onClick={this.clikHandler} className="ac" value="%" />
          <input type="button" onClick={this.clikHandler} className="ac" value="÷" />
        </div>

        <div className="row2">
          <input type="button" onClick={this.clikHandler} className="ac" value="7" />
          <input type="button" onClick={this.clikHandler} className="plus" value="8" />
          <input type="button" onClick={this.clikHandler} className="perc" value="9" />
          <input type="button" onClick={this.clikHandler} className="div" value="x" />
        </div>
        <div className="row3">
          <input type="button" onClick={this.clikHandler} className="four" value="4" />
          <input type="button" onClick={this.clikHandler} className="five" value="5" />
          <input type="button" onClick={this.clikHandler} className="six" value="6" />
          <input type="button" onClick={this.clikHandler} className="moins" value="-" />
        </div>

        <div className="row4">
          <input type="button" onClick={this.clikHandler} className="one" value="1" />
          <input type="button" onClick={this.clikHandler} className="two" value="2" />
          <input type="button" onClick={this.clikHandler} className="three" value="3" />
          <input type="button" onClick={this.clikHandler} className="four" value="+" />
        </div>
        <div className="row5">
          <input type="button" onClick={this.clikHandler} className="zero" value="0" />
          <input type="button" onClick={this.clikHandler} className="point" value="." />
          <input type="button" onClick={this.clikHandler} className="equal" value="=" />
        </div>
      </div>
    );
  }
}

export default Table;
