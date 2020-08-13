import React, {Component} from 'react';
import DonateDifferently from '..//Images/DonateDifferently.png';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    if (event.target.value === '') {
      this.props.onFilter('');
    }
  }

  handleKeyUp(event) {
    if (event.key === 'Enter') {
      this.props.onFilter(this.state.value);
    }
  }

  render() {
    return (
      <img src={DonateDifferently} alt="logo" id="Donate-Differently-logo" />
    )
  }
}