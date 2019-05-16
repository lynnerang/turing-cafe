import React from 'react';
import ReservationCard from './ReservationCard';

const ReservationContainer = props => {
  const reservations = props.reservations.map(res => {
    return <ReservationCard cancelReservation={props.cancelReservation} key={res.id} details={res} />
  })
    return (
      <section className="ReservationContainer">
        {reservations}
      </section>
    );
}

export default ReservationContainer;