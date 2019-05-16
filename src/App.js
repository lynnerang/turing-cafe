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
			.then(reservations => this.setState({ reservations }));
	}

	addReservation = details => {
		this.setState({ reservations: [ ...this.state.reservations, details ] });
	};

	render() {
		console.log(this.state.reservations);
		return (
			<div className="App">
				<h1 className="app-title">Turing Cafe Reservations</h1>
				<div className="resy-form">
					<ReservationForm addReservation={this.addReservation} />
				</div>
				<div className="resy-container">
					<ReservationContainer reservations={this.state.reservations} />
				</div>
			</div>
		);
	}
}

export default App;
