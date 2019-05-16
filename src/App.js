import React, { Component } from 'react';
import './App.css';
import ReservationContainer from './ReservationContainer';
import ReservationForm from './ReservationForm';

class App extends Component {
	state = {
		reservations: []
	};

	componentDidMount() {
		fetch('http://localhost:3001/api/v1/reservations')
			.then(response => response.json())
      .then(reservations => this.setState({ reservations }))
      .catch(err => console.log(err))
	}

  addReservation = details => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify(details),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(result => this.setState({
        reservations: [...this.state.reservations, result]
      }))
      .catch(err => console.log(err))
  };
  
  cancelReservation = id => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(reservations => this.setState({ reservations }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.reservations)
		return (
			<div className="App">
				<h1 className="app-title">Turing Cafe Reservations</h1>
				<div className="resy-form">
					<ReservationForm addReservation={this.addReservation} />
				</div>
				<div className="resy-container">
          <ReservationContainer reservations={this.state.reservations} cancelReservation={this.cancelReservation} />
				</div>
			</div>
		);
	}
}

export default App;
