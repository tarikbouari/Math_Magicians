import React from 'react';
import './App.css';
import Calculator from './components/calculator';
import Nav from './components/nav';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Calculator />
      </div>
    );
  }
}

export default App;
