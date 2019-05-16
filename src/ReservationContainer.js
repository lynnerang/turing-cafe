import React from 'react';

const ReservationContainer = props => {
  const reservations = props.reservations.map(res => {
    <ReservationCard key={res.id} details={res} />
  })
    return (
      <section className="ReservationContainer">
        {reservations}
      </section>
    );
}

export default ReservationContainer;