import React, { Component } from 'react';

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    this.props.addReservation(this.state);
  }

  render() {
    return (
      <form className="ReservationForm">
        <input name="name" placeholder="Name" className="detail-input" onChange={this.handleChange}></input>
        <input name="date" placeholder="Date (mm/dd)" className="detail-input" onChange={this.handleChange}></input>
        <input name="time" placeholder="Time" className="detail-input" onChange={this.handleChange}></input>
        <input name="number" placeholder="Number of guests" type="number" className="detail-input" onChange={this.handleChange}></input>
        <button type="button" className="add-btn" onClick={this.handleSubmit}>Make Reservation</button>
      </form>
    );
  }
}

export default ReservationForm;