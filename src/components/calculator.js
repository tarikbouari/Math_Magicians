import React from 'react';
import Table from './Table';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Table />;
  }
}
